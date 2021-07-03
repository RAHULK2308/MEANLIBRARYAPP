import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address:string='/api';
  // server_address:string="http://localhost:3000"; for development
  constructor(private http:HttpClient) { }

  newUser(item:any)
  {   
    return this.http.post(`${this.server_address}/signup`,{"user":item})
    .subscribe(data =>{console.log(data)})
  }
  
  loginUser(user:any)
  {
    return this.http.post<any>(`${this.server_address}/login`, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  LoggedIn()
  {
    return !!localStorage.getItem('token1')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

}
