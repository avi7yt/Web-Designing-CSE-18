package com.example.studentapi;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    // In-memory list to store students (no database needed)
    private List<Student> studentList = new ArrayList<>();

    // Constructor - add some default students
    public StudentController() {
        studentList.add(new Student(1, "Ananya Sharma", "React",       92));
        studentList.add(new Student(2, "Rohan Mehta",  "Spring Boot",  85));
        studentList.add(new Student(3, "Priya Nair",   "Java OOP",     78));
    }

    // GET /api/students/welcome  → Returns welcome message
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Student Management REST API!";
    }

    // GET /api/students  → Returns all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentList;
    }

    // GET /api/students/{id}  → Returns one student by ID
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable int id) {
        for (Student s : studentList) {
            if (s.getId() == id) {
                return s;
            }
        }
        return null; // returns 200 with null body if not found
    }

    // POST /api/students  → Accepts new student data and saves it
    @PostMapping
    public String addStudent(@RequestBody Student student) {
        studentList.add(student);
        return "Student added successfully! Name: " + student.getName();
    }
}
