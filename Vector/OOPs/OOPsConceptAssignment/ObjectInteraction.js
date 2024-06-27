// Object Interaction:
//Create two classes, Student and Course. 
//The Student class should have fields name and enrolledCourses, 
//where enrolledCourses is an array of Course objects. The Course class should have fields courseName and credits. 
//Write methods to add courses to a student and display the student's details along with their enrolled courses.


class Course{
    constructor( courseName, credits){
        this.courseName = courseName;
        this.credits = credits;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.enrolledCourses = [];
    }

    addCourse(course) {
        this.enrolledCourses.push(course);
    }

    displayDetails() {
        console.log(`Student Name: ${this.name}`);
        console.log("Enrolled Courses:");
        this.enrolledCourses.forEach((course) => {
            console.log(`Course Name: ${course.courseName}, Credits: ${course.credits}`);
        });
    }
}

function main() {
    const student1 = new Student("Kiran");

    const course1 = new Course('Math',4);
    const course2 = new Course('Science',3);

    student1.addCourse(course1);
    student1.addCourse(course2);

    student1.displayDetails();
}

main();

/**
 * Student Name: Kiran
Enrolled Courses:
Course Name: Math, Credits: 4
Course Name: Science, Credits: 3
 */
