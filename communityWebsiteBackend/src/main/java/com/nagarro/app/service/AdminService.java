package com.nagarro.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.app.models.Admin;
import com.nagarro.app.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	AdminRepository adminRepository;
	

	public boolean login(Admin admin)
	{
		 Admin admin2=adminRepository.findByEmailAndPassword(admin.getEmail(), admin.getPassword());
		if(admin2!=null)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	public Optional<Admin> getAdmin(String email)
	{
		return adminRepository.findById(email);
	}

}
