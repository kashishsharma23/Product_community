package com.nagarro.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.app.models.Products;
import com.nagarro.app.repository.ProductsRepository;

@Service
public class ProductsService {
	@Autowired
	ProductsRepository productsRepository;
	
	public List<Products> getAllProducts()
	{
		return productsRepository.findAll();
	}
	
	public List<Products> search(Products products)
	{
		if(products.getCode()!=null)
		{
			return productsRepository.findByCode(products.getCode());
		}
		else if(products.getName()!=null&&products.getBrand()==null)
		{
			return productsRepository.findByName(products.getName());
		}
		else if(products.getName()!=null&&products.getBrand()!=null)
		{
			return productsRepository.findByNameAndBrand(products.getName(), products.getBrand());
		}
		else {
			return productsRepository.findByBrand(products.getBrand());
		}
	}
	
	public Optional<Products> getProduct(String code)
	{
		return productsRepository.findById(code);
	}
	

}
