import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingadvisorService } from '../savingadvisor.service';

@Component({
  selector: 'app-savingadvisor',
  templateUrl: './savingadvisor.component.html',
  styleUrls: ['./savingadvisor.component.css']
})
export class SavingadvisorComponent implements OnInit {
  NewCustomer:boolean= false;
 ExistingCustomer:boolean= false;
 b:any[]=[];
 data:any[]=[];
// flag:boolean= true;

  constructor(private savingdAdvisorService:SavingadvisorService,
    private router:Router
    ) { 
    }

  ngOnInit(): void 
  {
    // this.flag=true;
  }

  r1()
  {
    this.NewCustomer=true;
    this.ExistingCustomer=false;
    console.log("hello",this.NewCustomer);
  }

  r2()
  {
    this.ExistingCustomer=true;
    this.NewCustomer=false;
  }

  ncustomer(ncustomerform:any)
  {
    if(!ncustomerform.valid) {
      document.getElementById('ErrorMsg').innerHTML="Invalid Input";
    }
    else{
    // this.flag = false;
    console.log(ncustomerform.value);
    this.savingdAdvisorService.savingad(ncustomerform.value).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
      this.savingdAdvisorService.planvalues.next(this.data)
      this.router.navigate(['plans']);
      console.log(this.data);
      //this.b.push(this.data);
      //this.router.navigateByUrl('/plans');

    })
  }
  }
    ecustomer(ecustomerform: any)
    {
      if(!ecustomerform.valid) 
      {
        document.getElementById('ErrorMsg').innerHTML="Invalid Input";
      }
      else
      {
        console.log(ecustomerform.value);
        this.savingdAdvisorService.savingad1(ecustomerform.value).subscribe((res:any) => {
        this.data=res;
        this.savingdAdvisorService.planvalues.next(this.data)
        this.router.navigate(['plans']);
        console.log(res);
        })
      }
    }


  }

