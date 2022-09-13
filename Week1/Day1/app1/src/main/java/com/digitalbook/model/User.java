package com.digitalbook.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class User {
	private Integer id;
	private String name;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dob;
	private Address address;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	

}
