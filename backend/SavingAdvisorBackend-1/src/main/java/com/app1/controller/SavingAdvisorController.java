package com.app1.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.app1.model.ExistingCustomer1;
import com.app1.model.NewCustomer;
import com.app1.model.SavingPlanData;
import com.app1.service.SavingAdvisorService;


@RestController
@RequestMapping("/digitalbanking")
@CrossOrigin(origins ="http://localhost:4200/")
public class SavingAdvisorController {

	@Autowired
	private SavingAdvisorService service;
	
	@PostMapping("/savingadvisor/newcustomer")
	public ArrayList<SavingPlanData> getnewCustomer(@RequestBody NewCustomer newcustomerdata){
		double average=service.newCustomer(newcustomerdata);
		ArrayList<SavingPlanData> list=service.getdata(average);
		return list;
	}
	
	
	@PostMapping("/savingadvisor/existingcustomer")
	public ArrayList<SavingPlanData> existingcustomer(@RequestBody ExistingCustomer1 excustomer){
		double existingavg=service.existingCustomer1(excustomer);	
		ArrayList<SavingPlanData> list1=service.getOldData(existingavg);
		return list1;
	}
}

