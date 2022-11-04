package com.app1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app1.model.User;
@Repository
public interface UserRepo extends JpaRepository<User, String>{

	User findByUsername(String username);

}
