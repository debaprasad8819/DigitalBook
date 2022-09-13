package com.digitalbook.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.digitalbook.model.Address;
import com.digitalbook.model.User;

@RestController
public class DigitalBookController {
	Map<Integer,User> userMap= new HashMap<>();
	
	@RequestMapping(value = "/products", method = RequestMethod.POST)
	   public ResponseEntity<Object> createProduct(@RequestBody User user) {
		//userMap.put(user.getId(), user);
		//User user1 = userMap.get(user.getId());
		System.out.println("user related information1111::"+user.getName());
		Address address = user.getAddress();
		System.out.println("Address Information::"+address.getCity());
		
		
		//System.out.println("user related information::"+userMap.get(user.getId()));
		//System.out.println("user related information::"+userMap.get(user1.getName()));
	      return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
	   }
	
	   @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	   public ResponseEntity<Object> mgetUser(@PathVariable("id") Integer id) {
		   System.out.println("Get related information:::::"+id);
		System.out.println("Get related information:::::"+userMap.get(id));
	      return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
	   }

}
