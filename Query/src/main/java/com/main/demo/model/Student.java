package com.main.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="student_table",catalog="student")
public class Student {
//@GeneratedValue(strategy = GenerationType.AUTO)
//private int id;
@Id
private int roll;
private String name;
private String address;
private String department;
int age;
public Student() {  
	super();
	// TODO Auto-generated constructor stub
}
public Student(int roll,String name,String address,String department,int age) {
super();
//this.id=id;
this.roll=roll;
this.name=name;
this.address=address;
this.age=age;
this.department=department;
}
public String getDepartment() {
	return department;
}
public void setDepartment(String department) {
	this.department = department;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
//public int getId() {
//	return id;
//}
//public void setId(int id) {
//	this.id = id;
//}
public int getRoll() {
	return roll;
}
public void setRoll(int roll) {
	this.roll = roll;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}

}