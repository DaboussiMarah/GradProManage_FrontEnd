// authadmin.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthadminService {
  ProfilAdmin = {
    name: '',
    role: '',
  };

  helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('http://localhost:5000/api/admin/login', data);
  }

  saveDataProfil(token: any) {
    localStorage.setItem('token', token);
  }

  getName() {
    const token: any = localStorage.getItem('token');
    const decodeToken = this.helper.decodeToken(token);
    return decodeToken.name;
  }

  isLoggedIn() {
    const token: any = localStorage.getItem('token');
    return !!token && !this.helper.isTokenExpired(token);
  }

  isAdmin() {
    const token: any = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    const decodeToken = this.helper.decodeToken(token);
    const role = decodeToken.role;

    return role === 'admin' && !this.helper.isTokenExpired(token);
  }


  logout() {
    localStorage.removeItem('token');
  }
}
