package com.digitalbooks.payload.request;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
public class CreateBook {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long bookId;
	

	private String title;

	private String catagory;
	
	
	
	private Integer price;
	private Boolean isBlocked;
	public Boolean getIsBlocked() {
		return isBlocked;
	}
	public void setIsBlocked(Boolean isBlocked) {
		this.isBlocked = isBlocked;
	}
	
	private String publisher;

	private Boolean active;
	
	
	
	private String content;
	
	private String author;
	
	private String publishedDate;
	
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	
	
	
	public Long getBookId() {
		return bookId;
	}
	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCatagory() {
		return catagory;
	}
	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}
	
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPublishedDate() {
		return publishedDate;
	}
	public void setPublishedDate(String publishedDate) {
		this.publishedDate = publishedDate;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	

}
