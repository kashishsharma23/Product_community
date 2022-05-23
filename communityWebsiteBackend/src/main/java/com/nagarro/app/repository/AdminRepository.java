package com.nagarro.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.app.models.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {

	public Admin findByEmailAndPassword(String email,String password);
}
