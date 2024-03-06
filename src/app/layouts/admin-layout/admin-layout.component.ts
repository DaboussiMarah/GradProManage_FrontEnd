import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private asd:AuthadminService ,private router:Router){
  // if (!localStorage.getItem('token')){
    //this.router.navigate(['/admin/login'])
   //}
   
   
    //if(this.asd.LoggedIn()==true){
      //console.log("connected")
    //}
    //else {
      //this.router.navigate(['/admin/login'])
    //}

  }






  
  ngOnInit():void {

  }


  logout() {
    this.asd.logout();
    this.router.navigate(['/admin/login']);
  }

}
