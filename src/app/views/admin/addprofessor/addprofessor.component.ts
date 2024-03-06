import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprofessor',
  templateUrl: './addprofessor.component.html',
  styleUrls: ['./addprofessor.component.css']
})
export class AddprofessorComponent implements OnInit  {
  constructor(private ds:DataService , private route:Router) {

  }
  ngOnInit(): void {
    
  }


  add(f:any){
    let data=f.value
    
    console.log (data)
    
    this.ds.addprofessors(data).subscribe(data=>console.log(data))
    this.route.navigate(['/admin/enseignants'])
   }

}
