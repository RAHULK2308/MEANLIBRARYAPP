import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:'',
  password:''}

  constructor(private auth:AuthService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  loginUser () {
    if (this.user.email=="rahulkm4002@gmail.com" && this.user.password=="12345678"){
    this.auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
        alert("Now Your The Admin");
      },
      err => {
        console.log(err);
        this.router.navigate(['/'])
      }
    ) 
  
  }else{
    this.auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token1', res.token)
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        alert(err.error);
        
        this.router.navigate(['/'])
      }
    ) 

  }
}
}
