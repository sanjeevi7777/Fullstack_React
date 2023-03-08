package com.main.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.main.demo.model.Student;
import com.main.demo.serviceimplementation.StudentService;

@RestController
@CrossOrigin("*")
public class controllers {
	@Autowired
	private StudentService studentServiceImp;
	@PostMapping(value = "saveStudent")
	public Student saveStudent(@RequestBody Student student){
		System.out.println("Student save works properly!");
	    studentServiceImp.saveSudent(student);
        return student;
	}
	@GetMapping(value = "getStudent")
	public Student findStudent(@RequestParam int roll){
		return studentServiceImp.findStudent(roll);
	}
	@GetMapping(value = "getAllStudent")
	public List<Student>findAllStudent(){
		return studentServiceImp.findAllStudents();
	}
	@PutMapping("updateStudent")
	public Student updateStudent(@RequestBody Student student) {
		return studentServiceImp.updateStudent(student);
	}
	@DeleteMapping("deleteStudent")
	public String deleteStudent(@RequestParam int roll) 
	{
		
		studentServiceImp.deleteStudent(roll);
		return "Student Deleted !";
	} 
	
}