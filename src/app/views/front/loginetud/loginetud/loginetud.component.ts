import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-loginetud',
  templateUrl: './loginetud.component.html',
  styleUrls: ['./loginetud.component.css']
})
export class LoginetudComponent implements OnInit {


  form!: FormGroup; // Ajoutez le signe d'interrogation ici pour indiquer que la propriété peut être nulle

  datatoken:any
  constructor (private aus:AuthuserService , private router:Router, private formBuilder: FormBuilder,
    private http: HttpClient){}



  ngOnInit():void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    
  }


  




  loginetud(): void {
    if (this.form?.invalid) {
      Swal.fire("Erreur", "Veuillez entrer un email valide et un mot de passe", "error");
      return;
    }
  
    let data = this.form.value;
    this.aus.loginn(data).subscribe(
      (response) => {
        this.datatoken = response;
        this.aus.saveToken(this.datatoken.token);
        Swal.fire("Succès", "Authentification réussie", "success");
        this.router.navigate(['/espace_etudiant']);
      },
      (err) => {
        console.log(err);
  
        if (err.error && err.error.message) {
          // Si le serveur retourne un message d'erreur, utilisez-le
          Swal.fire("Erreur", err.error.message, "error");
        } else if (err.status === 401) {
          // Mot de passe incorrect
          Swal.fire("Erreur", "Mot de passe incorrect", "error");
        } else if (err.status === 400) {
          // Email inexistant
          Swal.fire("Erreur", "L'email n'existe pas", "error");
        } else {
          // Autre erreur non gérée
          Swal.fire("Erreur", "Une erreur s'est produite lors de l'authentification", "error");
        }
      }
    );
  }


  
  
}


