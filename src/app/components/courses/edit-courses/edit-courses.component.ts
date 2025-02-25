import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-courses',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-courses.component.html',
  styleUrl: './edit-courses.component.css'
})
export class EditCoursesComponent {
  courses: Course[] = [];
  coursoId: string = "";
  form: FormGroup;

  constructor(private courseService: CourseService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lng: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.coursoId = routeParams.get('id')!;

    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });

    this.courseService.getCouse(this.coursoId).subscribe((course) => {
      this.form.patchValue({
        nombre: course.name,
      descripcion: course.description,
      duracion: course.duration,
      lat: course.coordinates.lat,
      lng: course.coordinates.lng
      })
    })
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

      this.courseService.updateCourse(nuevoCourse).subscribe(() => {
        this.courses.push(nuevoCourse);
        this.form.reset();
      });
    }
  }
}
