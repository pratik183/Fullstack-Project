import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavingadvisorService {
 
  private baseUrl = "http://localhost:8081/digitalbanking/savingadvisor/newcustomer";
  private baseUrl2= "http://localhost:8081/digitalbanking/savingadvisor/existingcustomer";

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
