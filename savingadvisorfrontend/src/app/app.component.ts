
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

  if(localStorage.getItem('token'))
  {
    // this.a=localStorage.getItem(JSON.parse('token'));
    this.router.navigate(['/home']);
    // this.nav=true;
    document.getElementsByClassName('nava')[0]['style'].display="block";
    document.getElementsByClassName('nava')[1]['style'].display="block";
    document.getElementsByClassName('nava')[2]['style'].display="block";
    document.getElementsByClassName('nava')[3]['style'].display="block";

  }
  else{ 
  

      this.router.navigate(['/login']);
     document.getElementsByClassName('nava')[0]['style'].display="none";
     document.getElementsByClassName('nava')[1]['style'].display="none";
     document.getElementsByClassName('nava')[2]['style'].display="none";
      // window.location.reload();

  }
}
  // ngOnInit() {
  //   // this.a=localStorage.getItem(JSON.parse('token'));

  //   if(!localStorage.getItem('token'))
  //   {
  //       this.router.navigate(['/login']);
  //   }
  //   else{ 
  //     this.a=localStorage.getItem(JSON.parse('token'));
  //     this.router.navigate(['/home']);
  //   }
  
}
