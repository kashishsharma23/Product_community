package com.nagarro.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.app.models.User;
import com.nagarro.app.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/registeruser")
	public boolean insert(@RequestBody User user) {
		return userService.insert(user);
	}

	@PostMapping("/loginuser")
	public boolean login(@RequestBody User user)
	{
		return userService.login(user);
	}
	
	@GetMapping("/users")
	public List<User> getAllUsers()
	{
		return userService.getAllUsers();
	}
	
	@GetMapping("/users/{email}")
	public Optional<User> getUser(@PathVariable String email)
	{
		return userService.getUser(email);
	}
}
