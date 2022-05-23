package com.nagarro.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nagarro.app.models.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, String> {
	
	public List<Products> findByCode(String code);
	public List<Products> findByNameAndBrand(String name,String brand);
	public List<Products> findByName(String name);
	public List<Products> findByBrand(String brand);
}
