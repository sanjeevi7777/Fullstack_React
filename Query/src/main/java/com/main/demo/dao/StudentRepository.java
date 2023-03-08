package com.main.demo.dao;

import org.springframework.stereotype.Repository;

import com.main.demo.model.Student;

import org.springframework.data.repository.CrudRepository;
@Repository
public interface StudentRepository extends CrudRepository<Student,Integer>{
Student findById(int roll);
}