import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
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
      
      this.Router.navigateByUrl('/home');
      document.getElementsByClassName('nava')[0]['style'].display="block";
      document.getElementsByClassName('nava')[1]['style'].display="block";
      document.getElementsByClassName('nava')[2]['style'].display="block";
      document.getElementsByClassName('nava')[3]['style'].display="block";
    },(_error:any)=>{  
    // this.error="Invalid Credentials";
    document.getElementById('ErrorMsg').innerHTML="Invalid Credentials";
  }
    
    );

  }
  
}
