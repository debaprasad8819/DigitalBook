package com.digitalbook.controllers;

import static org.junit.Assert.assertNotNull;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.context.request.WebRequest;

import com.digitalbooks.controllers.BaseController;
import com.nt.exception.BookNotFoundException;

@RunWith(SpringRunner.class)
public class BaseControllerTest {
	
	@InjectMocks
	BaseController baseController;
	
	@Mock
	 WebRequest request;

	@Test
	public void testHandleException() {
		//MethodArgumentNotValidException ex = new Me
	}
	
	@Test
	public void testShowCustomMessage() {
		Exception ex = new Exception();
		Map<String,String> response = new HashMap<>();
        response.put("Description","Please provide correct input");
        Map<String,String> response1=baseController.showCustomMessage(ex);
        assertNotNull(response1);
	}
	
	@Test
	public void testHandleNoHandlerFound() {
		BookNotFoundException e = new BookNotFoundException();
       
		HashMap<String, String> response = new HashMap<>();
        response.put("status", "fail");
        response.put("message", e.getLocalizedMessage());
        HashMap<String, String> response1= baseController.handleNoHandlerFound(e, request);
        assertNotNull(response1);
        
	}
	
	
	
}
