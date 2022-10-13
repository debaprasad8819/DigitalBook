package com.digitalbooks.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;

import com.digitalbooks.models.ERole;
import com.digitalbooks.models.Role;
import com.digitalbooks.models.User;
import com.digitalbooks.repository.UserRepository;

import java.util.Optional;

@RunWith(SpringRunner.class)
public class UserDetailsServiceImplTest {
	
	@Mock
	UserRepository userRepository;
	
	@InjectMocks
	UserDetailsServiceImpl userDetailsServiceImpl;
	
	@Test
	public void testLoadUserByUsername() {
		String username="debaprasad12";
		User user=new User();
		user.setEmail("debaprasad12@gmail.com");
		user.setPassword("debaprasad12");
		user.setId(42L);
		Role role = new Role();
		role.setName(ERole.ROLE_READER);
		Optional<User> optioanlUser=Optional.of(user);
		when(userRepository.findByUsername(username)).thenReturn(optioanlUser);
	UserDetailsImpl userDetailsImpl=	(UserDetailsImpl) userDetailsServiceImpl.loadUserByUsername(username);
	assertNotNull(userDetailsImpl);
		
	}

}
