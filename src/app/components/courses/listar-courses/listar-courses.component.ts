import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-courses',
  imports: [RouterModule, RouterLink],
  templateUrl: './listar-courses.component.html',
  styleUrl: './listar-courses.component.css',
})
export class ListarCoursesComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });
  }

  getCoursesAll(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  getCourse(id:string){
    this.courseService.getCouse(id).subscribe((course) => {
      console.log(course);
    });
  }

  eliminarCourse(id: string){
    this.courseService.deleteCourse(id).subscribe(() => {
      this.getCoursesAll();
    });
  }


}
