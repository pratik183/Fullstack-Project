import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingadvisorService } from '../savingadvisor.service';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  //
  temp:any[]=[];
  @Input()c :any[]=[];
  constructor(private router:Router, private savingdAdvisorService: SavingadvisorService) {
    this.savingdAdvisorService.planvalues.subscribe(result => {
      this.temp=result;
      console.log(result);    
    })
   }
  ngOnInit(): void {
  
     //this.temp=this.router.getCurrentNavigation()?.extras?.state.plan;
    // this.temp=this.router.getCurrentNavigation().extras.queryParams.plan;
    // console.log(this.temp);
  }
   
}
