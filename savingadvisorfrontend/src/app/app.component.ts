
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'savingadvisorfrontend';

constructor(private router:Router){

}

 a:any
  ngOnInit() {
    // this.a=localStorage.getItem(JSON.parse('token'));

    if(!localStorage.getItem('token'))
    {
        this.router.navigate(['/login']);
    }
    else{ 
      this.a=localStorage.getItem(JSON.parse('token'));
      this.router.navigate(['/home']);
    }
  }
}
