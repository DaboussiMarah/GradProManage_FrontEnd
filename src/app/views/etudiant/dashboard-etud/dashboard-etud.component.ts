import { Component, OnInit } from '@angular/core';
import { AuthuserService } from '../../services/authuser.service';
import { DataService } from '../../services/data.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-etud',
  templateUrl: './dashboard-etud.component.html',
  styleUrls: ['./dashboard-etud.component.css']
})
export class DashboardEtudComponent  implements OnInit{
 userName : string=''

  display="none";
  dataArray:any=[]
  dataEnseignant={
    lastname:'',
    firstname:'',
    email:'',
   
    poste:'',
    id:''
  }  

  enseignantSelectionneId: string =''; // Nouvelle variable pour stocker l'ID de l'enseignant sélectionné

  messageSucces=''
  constructor(private ds:DataService,private aus:AuthuserService , private router:Router){
    this.ds.getAllProfessors().subscribe((data) => {
      this.dataArray = data;
      console.log(data);
    });


   
  }

 ngOnInit() {
  this.getUserName();

  }

  addcahier(f: any){
      let data=f.value
      
      console.log (data)
      
      this.ds.addcahiercharge(data).subscribe(data=>{
      console.log(data)
      alert("Ajout réussi avec succès")
      
    })
     
     }

    

    
onCloseHandled(){
  this.display="none"
}



onOpenHandled(enseignantId: string) {
  this.display="block"
  this.enseignantSelectionneId = enseignantId; // Mettez à jour l'ID de l'enseignant sélectionné
  // Ajoutez ici le code pour ouvrir le formulaire modal avec l'ID de l'enseignant
}

getUserName() {
  this.userName=this.aus.getName()
}




logout() {
  this.aus.logout();
  this.router.navigate(['/loginetud']);
}


}
  
