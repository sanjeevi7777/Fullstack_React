package com.main.demo.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.main.demo.dao.StudentRepository;
import com.main.demo.model.Student;
import com.main.demo.serviceinterface.StudentInterface;

@Service
public class StudentService implements StudentInterface {
    @Autowired
    private StudentRepository studentRepo;
	@Override
	public Student saveSudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepo.save(student) ;
	}

	@Override
	public Student updateStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepo.save(student);
	}

	@Override
	public List<Student> findAllStudents() {
		// TODO Auto-generated method stub
		return (List<Student>)studentRepo.findAll();
	}
	@Override
	public Student findStudent(int roll) {
		// TODO Auto-generated method stub
		return studentRepo.findById(roll);
	}

	@Override
	public void deleteStudent(int roll) {
		// TODO Auto-generated method stub
		studentRepo.deleteById(roll);
		
	}
//	public List<Student> getStudentSorted(String field){
//		return studentRepo.findAll(Sort.by(Sort.Direction.DESC,field));
//	}
//
//	//pagination
//	public List<Student> getStudentWithPagination( int offset,int pageSize){
//		Page<Student> page=studentRepo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
////	//sorting and paging
//	public List<Student> getStudentWithPagingAndSorting(int offset,int pageSize,String field){
//		PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
//		Page<Student> page = studentRepo.findAll(paging);
//		return page.getContent();
//	}

}