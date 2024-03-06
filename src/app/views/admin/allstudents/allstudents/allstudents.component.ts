import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';


@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  dataArray:any=[]
  dataEtudiant={
    lastname:'',
    firstname:'',
    email:'',
    departement:'',
    id:''
  }


  display="none";

constructor(private ds: DataService, private route: Router) {
    this.ds.getAllStudents().subscribe((data) => {
      this.dataArray = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
       
    


   
  
  
}

 



delete (id:any, i:number){
  this.ds.deleteStudents(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)


})

}
getdata(lastname:string,firstname:string,email:string,departement:string,id:any){
    this.display="block"
    this.dataEtudiant.lastname=lastname
    this.dataEtudiant.firstname=firstname
    this.dataEtudiant.email=email
    this.dataEtudiant.departement=departement
    this.dataEtudiant.id=id
    console.log(this.dataEtudiant)


}

onCloseHandled(){
  this.display="none"
}


updatenewstudent(f:any){
  let data=f.value
  this.ds.updateStudent(this.dataEtudiant.id,data).subscribe (response=>{
    console.log(response)
    let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataEtudiant.id)
      this.dataArray[indexId].lastname==data.lastname
      this.dataArray[indexId].first==data.firstname
      this.dataArray[indexId].email==data.email
      this.dataArray[indexId].departement==data.departement

   


  },(err:HttpErrorResponse)=>{
    console.log(err.message)
  

  } )

}



}
