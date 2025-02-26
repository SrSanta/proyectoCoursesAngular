import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-detalles-course',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detalles-course.component.html',
  styleUrl: './detalles-course.component.css'
})

export class DetallesCourseComponent {
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
}
