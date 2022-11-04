import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingadvisorService {
  planvalues = new BehaviorSubject(null);
  private baseUrl = "http://localhost:8080/newcustomer";
  private baseUrl2= "http://localhost:8080/existingcustomer";

  constructor(private httpClient: HttpClient) { }

  savingad(_NewCustomer :any)
  {  
    return this.httpClient.post(`${this.baseUrl}`,_NewCustomer);
  }

  savingad1(_ExistingCustomer:any)
  {
    return this.httpClient.post(`${this.baseUrl2}`,_ExistingCustomer);
  }
  
}
