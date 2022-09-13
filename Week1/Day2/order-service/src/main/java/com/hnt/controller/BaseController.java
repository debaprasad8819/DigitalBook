package com.hnt.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.hnt.exception.OrderNotFoundExcepiton;

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

	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(OrderNotFoundExcepiton.class)
	 public ResponseEntity<Object> handleOrderNotFound(OrderNotFoundExcepiton ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);

	}
}