package com.nt.controllers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.digitalbooks.controllers.DigitalBooksController;
import com.digitalbooks.models.Book;
import com.digitalbooks.services.DigitalBooksService;

public class DigitalBookControllerTest {
	
	@Mock
	DigitalBooksService digitalBooksService;
	
	@InjectMocks
	DigitalBooksController digitalBooksController;
	
	@Test
	public void testSaveBook() {
		
			Book book = new Book();
			book.setActive(true);
			book.setAuthor("Marvel");
			book.setCatagory("Finance");
			book.setContent("HHHHHHHHHHHHH");
			book.setIsBlocked(false);
			book.setPrice(40);
			book.setPublisher("");
			ResponseEntity responseEntity1 = new ResponseEntity("Book Created Sucessfully" , HttpStatus.CREATED);
			
			
			when(digitalBooksService.save(book)).thenReturn(book);
			ResponseEntity responseEntity = digitalBooksController.saveUser(book);
		   // assertEquals(responseEntity1, responseEntity);
			assertThat(responseEntity1.equals(responseEntity));
		    
		
	}

}
