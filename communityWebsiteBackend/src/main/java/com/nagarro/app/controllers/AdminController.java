package com.nagarro.app.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.app.models.Admin;
import com.nagarro.app.service.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	@Autowired
	AdminService adminService;
	
	@PostMapping("/loginadmin")
	public boolean login(@RequestBody Admin admin)
	{
		return adminService.login(admin);
	}
	
	@GetMapping("/admin/{email}")
	public Optional<Admin> getAdmin(@PathVariable String email)
	{
		return adminService.getAdmin(email);
	}

}
