package com.nagarro.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.app.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	public User findByEmailAndPassword(String email,String password);
	public User findByEmail(String email);

}
