import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageError: string | null = null;
  form!: FormGroup;

  constructor(
    private aus: AuthuserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    let data = this.form.value;
    this.aus.register(data).subscribe(
      () => {
        this.router.navigate(['/loginetud']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status === 400 && err.error && err.error.message && err.error.message.toLowerCase().includes('email already exists')) {
          // Email existe déjà dans la base de données
          this.messageError = 'Email existe déjà';
        } else {
          // Autre erreur non gérée
          Swal.fire('Erreur', 'Email existe déjà', 'error');
        }
      }
    );
  }
}
