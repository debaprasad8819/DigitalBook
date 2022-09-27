package com.digitalbooks.services;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import org.springframework.test.context.junit4.SpringRunner;

import com.digitalbooks.models.Book;
import com.digitalbooks.repository.BookRepository;
import com.digitalbooks.repository.UserRepository;

@RunWith(SpringRunner.class)
public class DigitalBooksServiceTest {
	
	@InjectMocks
	DigitalBooksService service;
	
	@Mock
	UserRepository userRepository;
	
	@Mock
	BookRepository bookRepository;
	
	
	@Test
	public void testSave() {
		Book book = new Book();
		book.setActive(true);
		book.setAuthor("Marvel");
		book.setCatagory("Finance");
		book.setContent("HHHHHHHHHHHHH");
		book.setIsBlocked(false);
		book.setPrice(40);
		book.setPublisher("");
		
		when(bookRepository.save(book)).thenReturn(book);
		Book book1= service.save(book);
	    assertEquals("Marvel", book.getAuthor());
	}
	
	@Test
	public void testgetBookByCatagoryAndAuthorAndPriceWithWrongValue() {
		String catagory="catagory price";
		String author = "Ashish";
		Integer price=8;
		
		Book book = new Book();
		book.setActive(true);
		book.setAuthor("Marvel");
		book.setCatagory("Finance");
		book.setContent("HHHHHHHHHHHHH");
		book.setIsBlocked(false);
		book.setPrice(40);
		book.setPublisher("");
		List<Book> list1= new ArrayList<>();
		list1.add(book);
		
		when(bookRepository.findByCatagoryAndAuthorAndPrice(catagory, author, price)).thenReturn(list1);
		List<Book> list =service.getBookByCatagoryAndAuthorAndPrice(catagory, author, price);
		assertEquals(list, list1);
		
	}
	
	@Test
	public void testisUserAvailable() {
		 String userName ="Deba7";
		 when(userRepository.existsByUsername(userName)).thenReturn(true);
		 Boolean isUsr= service.isUserAvailable(userName);
		 assertEquals(true, isUsr);
	 }
	

}
