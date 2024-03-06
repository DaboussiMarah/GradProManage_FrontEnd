import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit  {

  constructor(private ds:DataService , private route:Router) {

  }
  ngOnInit(): void {
    
  }


  add(f:any){
    let data=f.value
    
    console.log (data)
    
    this.ds.addStudents(data).subscribe(data=>console.log(data))
    this.route.navigate(['/admin/etudiants'])
   }

}
