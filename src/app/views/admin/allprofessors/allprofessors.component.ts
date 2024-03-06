import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-allprofessors',
  templateUrl: './allprofessors.component.html',
  styleUrls: ['./allprofessors.component.css']
})
export class AllprofessorsComponent implements OnInit {

  dataArray:any=[]
  dataEnseignant={
    lastname:'',
    firstname:'',
    email:'',
    password:'',
    poste:'',
    id:''
  }  



  display="none";

  constructor(private ds: DataService, private route: Router) {
    this.ds.getAllProfessors().subscribe((data) => {
      this.dataArray = data;
      console.log(data);
    });
  }
  ngOnInit(): void {
    
  }


  delete (id:any, i:number){
    this.ds.deleteProfessor(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
  
  
  })
  
  }


  getdata(lastname:string,firstname:string,email:string,password:string,poste:string,id:any){
    this.display="block"
    this.dataEnseignant.lastname=lastname
    this.dataEnseignant.firstname=firstname
    this.dataEnseignant.email=email
    this.dataEnseignant.password=password
    this.dataEnseignant.poste=poste
    this.dataEnseignant.id=id
    console.log(this.dataEnseignant)


}




onCloseHandled(){
  this.display="none"
}



updatenewprofessor(f:any){
  let data=f.value
  this.ds.updateProfessor(this.dataEnseignant.id,data).subscribe (response=>{
    console.log(response)
    let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataEnseignant.id)
      this.dataArray[indexId].lastname==data.lastname
      this.dataArray[indexId].first==data.firstname
      this.dataArray[indexId].email==data.email
      this.dataArray[indexId].password==data.password
      this.dataArray[indexId].poste==data.poste

   


  },(err:HttpErrorResponse)=>{
    console.log(err.message)
  

  } )

}

}
