package com.nagarro.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Products {
	@Id
	private String code;
	private String name;
	private String brand;
	private float averagerating;
	@Column(length = 3000)
	private byte[] image;
	public Products() {
		super();
	}
	public Products(String code, String name, String brand) {
		super();
		this.code = code;
		this.name = name;
		this.brand = brand;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public float getAveragerating() {
		return averagerating;
	}
	public void setAveragerating(float averagerating) {
	this.averagerating=averagerating;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	
	
}
