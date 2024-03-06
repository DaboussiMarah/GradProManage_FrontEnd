import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthensService } from 'src/app/views/services/authens.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-dashboard-enseignant',
  templateUrl: './dashboard-enseignant.component.html',
  styleUrls: ['./dashboard-enseignant.component.css']
})
export class DashboardEnseignantComponent  implements OnInit {
  ensEmail: string=''
  encadrements:any=[];

  constructor(private aus:AuthensService ,private router:Router,private ds:DataService){}

  ngOnInit(): void {
    this.getEnsEmail();
  
    const enseignantId = this.aus.getEnseignantId();

    if (enseignantId) {
      // Appelez le service pour récupérer les cahiers de charge associés à l'enseignant
      this.ds.getEncadrementsByEnseignantId(enseignantId).subscribe(
    (data) => {
      this.encadrements = data;
      console.log('Cahiers de charge:', this.encadrements);
    },
    error => {
      console.log('Erreur lors de la récupération des cahiers de charge:', error);
    }
  );
    }
  
  }
  logout() {
    this.aus.logout();
    this.router.navigate(['/loginens']);
  }
  



  
getEnsEmail() {
  this.ensEmail = this.aus.getEmail();
}




delete (id:any, i:number){
  this.ds.deletecc(id).subscribe(response=>{
    console.log(response)
    this.encadrements.splice(i,1)


})

}

}
