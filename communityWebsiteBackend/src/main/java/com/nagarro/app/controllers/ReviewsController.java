package com.nagarro.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.app.models.Reviews;
import com.nagarro.app.service.ReviewsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewsController {
	
	@Autowired
	ReviewsService reviewsService;
	
	@GetMapping("/reviews")
	public List<Reviews> getAllReviews()
	{
		return reviewsService.getAllReviews();
	}
	
	@GetMapping("/averagerating/{code}")
	public float averageRating(@PathVariable String code)
	{
		return reviewsService.averageRating(code);
		
	}
	
	@GetMapping("/reviews/{code}")
	public List<Reviews> getReviews(@PathVariable String code)
	{
		return reviewsService.getReviews(code);	
	}
	
	@PostMapping("/reviews")
	public void post(@RequestBody Reviews reviews)
	{
		reviewsService.post(reviews);
	}
	
	@GetMapping("/pendingReviews")
	public List<Reviews> getPendingReviews()
	{
		return reviewsService.getPendingReviews();
	}
	
	@GetMapping("/review/{sno}")
	public Optional<Reviews> getReviewBySno(@PathVariable int sno)
	{
		return reviewsService.getReviewBySno(sno);
	}

	@PutMapping("/reviews/{sno}")
	public void updateStatus(@PathVariable int sno,@RequestBody Reviews reviews)
	{
		reviewsService.updateStatus(sno,reviews);
	}
	
	@DeleteMapping("/reviews/{sno}")
	public void delete(@PathVariable int sno)
	{
		reviewsService.delete(sno);
	}
}
