import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  ProfilUser = {
    name: '',
    role: '',
  };
  helperr = new JwtHelperService();
  constructor(private http: HttpClient) { }



  loginn(body: any) {
    return this.http.post('http://localhost:5000/api/user/login', body);
  }

  register(body: any) {
    return this.http.post('http://localhost:5000/api/user/register', body);
  }



  logout() {
    localStorage.removeItem('token');
  }


  saveToken (token: any) {
    localStorage.setItem('token', token);
  }


  getName() {
    const token: any = localStorage.getItem('token');
    const decodeToken = this.helperr.decodeToken(token);
    return decodeToken.name;
  }

  isLoggedInn() {
    const token: any = localStorage.getItem('token');
    return !!token && !this.helperr.isTokenExpired(token);
  }

  isUser() {
    const token: any = localStorage.getItem('token');
    if (!token) {
      return false;
    }
  
    const decodeToken = this.helperr.decodeToken(token);
    const role = decodeToken.role;
  
    console.log('User role:', role);
  
    return role === 'user' && !this.helperr.isTokenExpired(token);
  }
}
