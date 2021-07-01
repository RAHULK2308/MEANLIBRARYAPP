import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    uname:'',
    email:'',
  password:''}

  constructor(private auth:AuthService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  AddUser()
  {    
    this.auth.newUser(this.user);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/login']);
  }

}
