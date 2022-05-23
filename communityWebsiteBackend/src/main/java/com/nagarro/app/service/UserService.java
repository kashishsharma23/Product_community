package com.nagarro.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.app.models.User;
import com.nagarro.app.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	public boolean insert(User user)
	{
		User user2=userRepository.findByEmail(user.getEmail());
		if(user2==null)
		{
		userRepository.save(user);
		return true;
		}
		else {
			return false;
		}
	}
	
	public boolean login(User user1)
	{
		User user2=userRepository.findByEmailAndPassword(user1.getEmail(), user1.getPassword());
		if(user2!=null&&(user2.getPassword().equals(user1.getPassword())))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	public List<User> getAllUsers()
	{
		return userRepository.findAll();
	}

	public Optional<User> getUser(String email)
	{
		return userRepository.findById(email);
	}
}
