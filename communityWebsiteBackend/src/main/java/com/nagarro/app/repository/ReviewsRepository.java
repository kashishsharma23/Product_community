package com.nagarro.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nagarro.app.models.Reviews;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Integer> {
	
	@Query(value="select AVG(rating) from Reviews where code=:c and status='A'")
	public float getAverageRating(@Param("c") String code);
	
	@Query("select r from Reviews r where r.code=:c AND r.status='A'")
	public List<Reviews> findByCode(@Param("c") String code);
	
	@Query("select r from Reviews r where r.status='R'")
	public List<Reviews> findByStatus();
	
	public Reviews findBySno(int sno);
	
	@Query("select r from Reviews r where r.status='A'")
	public List<Reviews> findAll();

}
