
package com.main.demo.serviceinterface;

import java.util.List;
import com.main.demo.model.Student;

public interface StudentInterface { 
	public Student saveSudent(Student student);
	public Student updateStudent(Student student);
	public List <Student> findAllStudents();
	public Student findStudent(int id);
	public void deleteStudent(int id);
	
}