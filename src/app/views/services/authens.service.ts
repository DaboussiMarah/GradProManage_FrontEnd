// authadmin.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthensService {
  ProfilEns = {
    name: '',
    role: '',
  };

  helperrr = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('http://localhost:5000/api/enseignant/login', data);
  }

  saveDataProfil(token: any) {
    localStorage.setItem('token', token);
  }

  getEmail() {
    const token: any = localStorage.getItem('token');
    const decodeToken = this.helperrr.decodeToken(token);
    return decodeToken.email;
  }


  getEnseignantId(): string | null {
    const token: any = localStorage.getItem('token');
    if (token) {
      const decodeToken = this.helperrr.decodeToken(token);
      return decodeToken ? decodeToken._id : null;
    }
    return null;
  }



  isLoggedIn() {
    const token: any = localStorage.getItem('token');
    return !!token && !this.helperrr.isTokenExpired(token);
  }

  isEns() {
    const token: any = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    const decodeToken = this.helperrr.decodeToken(token);
    const role = decodeToken.role;

    return role === 'enseignant' && !this.helperrr.isTokenExpired(token);
  }


  logout() {
    localStorage.removeItem('token');
  }
}
