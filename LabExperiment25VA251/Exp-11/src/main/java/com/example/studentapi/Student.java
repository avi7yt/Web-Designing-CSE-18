package com.example.studentapi;

public class Student {

    private int id;
    private String name;
    private String course;
    private int marks;

    // Default constructor (needed for JSON deserialization)
    public Student() {
    }

    // Parameterized constructor
    public Student(int id, String name, String course, int marks) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.marks = marks;
    }

    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getCourse() { return course; }
    public int getMarks() { return marks; }

    // Setters
    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setCourse(String course) { this.course = course; }
    public void setMarks(int marks) { this.marks = marks; }
}
