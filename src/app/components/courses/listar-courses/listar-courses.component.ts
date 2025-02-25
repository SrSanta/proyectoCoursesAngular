import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { RouterLink, RouterModule } from '@angular/router';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-listar-courses',
  imports: [RouterModule, RouterLink],
  templateUrl: './listar-courses.component.html',
  styleUrl: './listar-courses.component.css',
})
export class ListarCoursesComponent {
  courses: Course[] = [];
  students: Student[] = [];

  constructor(
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      console.log(students);
    });
  }

  getCoursesAll(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  getCourse(id: string) {
    this.courseService.getCouse(id).subscribe((course) => {
      console.log(course);
    });
  }

  eliminarCourse(id: string) {
    if (this.students.find((s) => s.course === id)) {
      this.courseService.deleteCourse(id).subscribe(() => {
        this.getCoursesAll();
      });
    } else {
      alert('Este Curso tiene alumnos asociados');
    }
  }
}
