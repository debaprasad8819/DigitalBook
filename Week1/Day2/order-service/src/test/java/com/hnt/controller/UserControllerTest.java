package com.hnt.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.hnt.entity.User;
import com.hnt.service.UserService;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {
	@Mock
	UserService service;
	@InjectMocks
	UserController controller;

	@Test
	void testSaveUser1() {
		User user = new User();
		user.setId(1);
		when(service.save(user)).thenReturn(user);// mocking
		Integer savedUserId = controller.saveUser1(user);
		assertEquals(1, savedUserId);
	}
	@Test
	void testSaveUser() {
		int age=45;
		float height=67;
		MultiValueMap headers = new LinkedMultiValueMap<String, String>();
		headers.add("headerfromserver", "success");
		
		User user = new User();
		user.setId(1);
		when(service.save(user)).thenReturn(user);// mocking
		ResponseEntity responseEntity = new ResponseEntity(user,headers , HttpStatus.CREATED);

		
		ResponseEntity savedUserId = controller.saveUser(user,age,height);
		assertEquals(responseEntity, savedUserId);
	}
	@Test
	void testgetUser() {
		Iterable<User> user = new ArrayList<>();
		when(service.getUser()).thenReturn(user);// mocking
		Iterable<User> userController = controller.getUser();
		assertEquals(user, userController);
	}
	@Test
	void testDeleteUser() {
		int userId=1;
		controller.deleteUser(userId);
		verify(service).delete(userId);
	}

}
