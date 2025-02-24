import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-listar-students',
  imports: [RouterModule, RouterLink],
  templateUrl: './listar-students.component.html',
  styleUrl: './listar-students.component.css'
})
export class ListarStudentsComponent {
  students: Student[] = [];
  courses: Course[] = [];

  constructor(private studentService: StudentService,private courseService: CourseService){}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      console.log(students);
    });
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });
  }

  getStudentsAll(): void {
    this.studentService.getStudents().subscribe((student) => {
      this.students = student;
    });
  }

  getStudent(id:string){
    this.studentService.getStudent(id).subscribe((student) => {
      console.log(student);
    });
  }

  eliminarStudent(id: string){
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudentsAll();
    });
  }
}
