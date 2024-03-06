import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get('http://localhost:5000/api/etudiants')
  }
  deleteStudents(id:any){
    return this.http.delete('http://localhost:5000/api/supprimer_etudiant/'+id)

  }


  addStudents(profile:any){
    return this.http.post('http://localhost:5000/api/ajouter_etudiant',profile)
  }



  
  updateStudent(id:string,newprofile:any){
    return this.http.patch('http://localhost:5000/api/modifier_etudiant/'+id,newprofile)
  }



  addprofessors(profile:any){
    return this.http.post('http://localhost:5000/api/ajouter_enseignant',profile)
  }



  getAllProfessors(){
    return this.http.get('http://localhost:5000/api/enseignants')
  }


  deleteProfessor(id:any){
    return this.http.delete('http://localhost:5000/api/supprimer_enseignant/'+id)

  }

  
  updateProfessor(id:string,newprofile:any){
    return this.http.patch('http://localhost:5000/api/modifier_enseignant/'+id,newprofile)
  }



  addcahiercharge(cc:any){
    return this.http.post('http://localhost:5000/api/ajouter_cc',cc)
  }


  getEncadrementsByEnseignantId(enseignantId: string) {
    return this.http.get(`http://localhost:5000/api/encadrements/${enseignantId}`);
  }
  

  deletecc(id:any){
    return this.http.delete('http://localhost:5000/api/supprimer_cc/'+id)

  }
}
