package com.debmalya.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;



@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "deb","Learn to Dance 2", new Date(), false ));
		todos.add(new Todo(++idCounter, "deb","Learn about Microservices 2", new Date(), false ));
		todos.add(new Todo(++idCounter, "deb","Learn about Angular", new Date(), false ));
	}
	
	public List<Todo>  findAll(){
		return todos;
	}

}
