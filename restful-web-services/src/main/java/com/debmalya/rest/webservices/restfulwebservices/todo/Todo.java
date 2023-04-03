package com.debmalya.rest.webservices.restfulwebservices.todo;

import java.util.Date;
import java.util.Objects;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	private Long id;
	
	
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;
	
	public Todo(long id, String userName, String description, Date targetdate, boolean isDone) {
		super();
		this.id = id;
		this.username = userName;
		this.description = description;
		this.targetDate = targetdate;
		this.isDone = isDone;
	}

	protected Todo() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return username;
	}

	public void setUserName(String userName) {
		this.username = userName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetdate() {
		return targetDate;
	}

	public void setTargetdate(Date targetdate) {
		this.targetDate = targetdate;
	}

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if(id!=other.id)
			return false;
		return true;
	}
	
	

}
