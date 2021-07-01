import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://localhost:3000/login";
  constructor(private http:HttpClient) { }

  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/signup",{"user":item})
    .subscribe(data =>{console.log(data)})
  }
  
  loginUser(user:any)
  {
    return this.http.post<any>(this.loginUrl, user)
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
