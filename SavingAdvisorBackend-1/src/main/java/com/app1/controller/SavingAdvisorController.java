package com.app1.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app1.model.User;
import com.app1.repository.UserRepo;
import com.app1.model.ExistingCustomer1;
import com.app1.model.NewCustomer;
import com.app1.model.SavingPlanData;
import com.app1.service.SavingAdvisorService;


@RestController
@CrossOrigin(origins ="http://localhost:4200/")
public class SavingAdvisorController {

	@Autowired
	private SavingAdvisorService service;
	
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/")
	public ResponseEntity<User> loginUser(@RequestBody User userData){
		User user=userRepo.findByUsername(userData.getUsername());
		if(user.getUsername().equals(userData.getUsername()) && user.getPassword().equals(userData.getPassword())){
			return ResponseEntity.ok(user);
		}
		return (ResponseEntity<User>) ResponseEntity.internalServerError();
		
	}
	
	@PostMapping("/newcustomer")
	public ArrayList<SavingPlanData> getnewCustomer(@RequestBody NewCustomer newcustomerdata){
		double average=service.newCustomer(newcustomerdata);
		ArrayList<SavingPlanData> list=service.getdata(average);
		return list;
	}
	
	
	@PostMapping("/existingcustomer")
	public ArrayList<SavingPlanData> existingcustomer(@RequestBody ExistingCustomer1 excustomer){
		double existingavg=service.existingCustomer1(excustomer);	
		ArrayList<SavingPlanData> list1=service.getOldData(existingavg);
		return list1;
	}
}

