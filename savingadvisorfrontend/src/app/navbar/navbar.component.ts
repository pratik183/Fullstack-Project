import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  ur:any;
  ngOnInit(): void {
    this.ur=localStorage.getItem('token');
    this.ur=(JSON.parse(this.ur))
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    window.location.reload();
  }
  
}
