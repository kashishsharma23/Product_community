package com.nagarro.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.app.models.Products;
import com.nagarro.app.service.ProductsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductsController {
	@Autowired
	ProductsService productsService;
	
	@GetMapping("/products")
	public List<Products> getAllProducts()
	{
		return productsService.getAllProducts();
	}
	
	@PostMapping("/products")
	public List<Products> search(@RequestBody Products products)
	{
		return productsService.search(products);
	}
	
	@GetMapping("/products/{code}")
	public Optional<Products> getProduct(@PathVariable String code)
	{
		return productsService.getProduct(code);
	}
}
