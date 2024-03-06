import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthensService } from 'src/app/views/services/authens.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-enseignant',
  templateUrl: './auth-enseignant.component.html',
  styleUrls: ['./auth-enseignant.component.css']
})
export class AuthEnseignantComponent implements OnInit {
  ngOnInit(): void {


    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }



  form!: FormGroup; // Ajoutez le signe d'interrogation ici pour indiquer que la propriété peut être nulle

  dataReceived:any



  constructor(private asd:AuthensService , private router:Router, private formBuilder: FormBuilder,
    private http: HttpClient){

  }



  










  loginens(): void {
    if (this.form?.invalid) {
      Swal.fire("Erreur", "Veuillez entrer un email valide et un mot de passe", "error");
      return;
    }
  
    let data = this.form.value;
    this.asd.login(data).subscribe(
      (response) => {
        this.dataReceived = response;
        this.asd.saveDataProfil(this.dataReceived.token);
        Swal.fire("Succès", "Authentification réussie", "success");
        this.router.navigate(['/espace_enseignant']);
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
