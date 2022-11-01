package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.User;
import com.app.repository.UserRepo;

@RestController
@RequestMapping("/digitalbanking")
@CrossOrigin(origins ="http://localhost:4200/")
public class UserController {

	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/login")
	public ResponseEntity<User> loginUser(@RequestBody User userData){
		User user=userRepo.findByUsername(userData.getUsername());
		if(user.getUsername().equals(userData.getUsername()) && user.getPassword().equals(userData.getPassword())){
			return ResponseEntity.ok(user);
		}
		return (ResponseEntity<User>) ResponseEntity.internalServerError();
		
	}
}
