import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-form-courses',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-courses.component.html',
  styleUrl: './form-courses.component.css'
})
export class FormCoursesComponent {
  courses: Course[] = [];
  form: FormGroup;

  constructor(private courseService: CourseService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lng: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });
  }

  submit() {
    if (this.form.valid) {
      const nuevoCourse: Course = {
        id: (Number(this.courses[this.courses.length - 1].id) + 1).toString(),
        name: this.form.value.nombre,
        description: this.form.value.descripcion,
        duration: this.form.value.duration,
        coordinates: {
          lat: this.form.value.lat,
          lng: this.form.value.lng
        },
      };

      this.courseService.addCourse(nuevoCourse).subscribe(() => {
        this.courses.push(nuevoCourse);
        this.form.reset();
      });
    }
  }
}
