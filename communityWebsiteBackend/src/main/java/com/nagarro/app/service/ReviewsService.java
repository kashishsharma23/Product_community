package com.nagarro.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.app.models.Reviews;
import com.nagarro.app.repository.ReviewsRepository;

@Service
public class ReviewsService {
	
	@Autowired
	ReviewsRepository reviewsRepository;
	
	public List<Reviews> getAllReviews()
	{
		return reviewsRepository.findAll();
	}
	
	
	public float averageRating(String code)
	{
		return reviewsRepository.getAverageRating(code);
	}

	public List<Reviews> getReviews(String code)
	{
		return reviewsRepository.findByCode(code);
	}
	
	public void post(Reviews reviews)
	{
		reviewsRepository.save(reviews);
	}
	
	public List<Reviews> getPendingReviews()
	{
		return reviewsRepository.findByStatus();
	}
	
	public Optional<Reviews> getReviewBySno(int sno)
	{
		return reviewsRepository.findById(sno);
	}
	
	public void updateStatus(int sno,Reviews reviews)
	{
		Reviews reviews2=reviewsRepository.findBySno(reviews.getSno());
		reviews2.setStatus("A");
		reviewsRepository.save(reviews2);
		
	}
	
	public void delete(int sno)
	{
		reviewsRepository.deleteById(sno);
	}
}
