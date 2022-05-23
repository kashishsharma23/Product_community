package com.nagarro.app;

import java.io.FileInputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.nagarro.app.models.Products;
import com.nagarro.app.repository.ProductsRepository;

@SpringBootApplication
public class CommunityWebsiteBackendApplication {
	@Autowired
	ProductsRepository productsRepository;
	public static void main(String[] args) {
		SpringApplication.run(CommunityWebsiteBackendApplication.class, args);		
	}

//	@Override
//	public void run(String... args) throws Exception {
//		String ad="src/main/resources/images/6.jpg";
//		FileInputStream fis=new FileInputStream(ad);
//		byte[] data=new byte[fis.available()];
//		fis.read(data);
//		Products products=new Products();
//		products.setCode("6");
//		products.setName("shoes");
//		products.setBrand("Woodland");
//		products.setImage(data);
//		productsRepository.save(products);
//		
//	}

//	

}
 