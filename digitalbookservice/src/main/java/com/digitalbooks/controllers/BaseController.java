package com.digitalbooks.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

import com.nt.exception.BookNotFoundException;
import com.nt.exception.RequestNotFoundException;

public class BaseController {
	
	public BaseController() {
		super();
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	Map<String, String> handleException(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldname = ((FieldError) error).getField();
			String message = ((FieldError) error).getDefaultMessage();
			errors.put(fieldname, message);
		});
		return errors;
	}
	
	 @ExceptionHandler(BookNotFoundException.class)
	    @ResponseStatus(HttpStatus.NOT_FOUND)
	    public HashMap<String, String> handleNoHandlerFound(BookNotFoundException e, WebRequest request) {
	        HashMap<String, String> response = new HashMap<>();
	        response.put("status", "fail");
	        response.put("message", e.getLocalizedMessage());
	        return response;
	    }
	 
	 @ExceptionHandler(RequestNotFoundException.class)
	 @ResponseStatus(HttpStatus.BAD_REQUEST)
	    @ResponseBody
	    Map<String,String> showCustomMessage(Exception e){


	        Map<String,String> response = new HashMap<>();
	        response.put("Description","Please provide correct input");

	        return response;
	    }

}
