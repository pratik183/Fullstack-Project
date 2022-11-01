import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private savingdAdvisorService:SavingadvisorService,
    private router:Router
    ) { }

  ngOnInit(): void 
  { }

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
    console.log(ncustomerform.value);
    this.savingdAdvisorService.savingad(ncustomerform.value).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
      this.router.navigate(['plans'],{state :{plan:this.data}});
      console.log(this.data);
      //this.b.push(this.data);
      //this.router.navigateByUrl('/plans');
    })
  }
    ecustomer(ecustomerform: any)
    {
      console.log(ecustomerform.value);
      this.savingdAdvisorService.savingad1(ecustomerform.value).subscribe((res1)=>{
        console.log(res1);
      })
    }
  }

