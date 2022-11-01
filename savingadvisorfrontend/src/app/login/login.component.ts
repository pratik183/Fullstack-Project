import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User= new User();
  constructor(private loginservice: LoginService,
    private Router: Router
              
    ) { }

  ngOnInit(): void {
  }

  userLogin(){
    this.loginservice.loginUser(this.user).subscribe(_data => {
      let a:any = _data
      localStorage.setItem('token',JSON.stringify(a))

      alert("Login Success"); 
      this.Router.navigateByUrl('/home');
    },_error=>alert("Please enter correct Username and Password"));
  }
  
}
