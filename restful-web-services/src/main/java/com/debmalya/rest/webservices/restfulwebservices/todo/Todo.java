package com.debmalya.rest.webservices.restfulwebservices.todo;

import java.util.Date;

public class Todo {
	
	private long id;
	private String userName;
	private String description;
	private Date targetdate;
	private boolean isDone;
	
	public Todo(long id, String userName, String description, Date targetdate, boolean isDone) {
		super();
		this.id = id;
		this.userName = userName;
		this.description = description;
		this.targetdate = targetdate;
		this.isDone = isDone;
	}

	public Todo() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetdate() {
		return targetdate;
	}

	public void setTargetdate(Date targetdate) {
		this.targetdate = targetdate;
	}

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	
	

}
