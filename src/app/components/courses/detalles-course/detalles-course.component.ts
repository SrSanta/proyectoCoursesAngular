import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { MapComponent } from '../../map/map.component';

@Component({
  selector: 'app-detalles-course',
  imports: [CommonModule, MapComponent, ReactiveFormsModule],
  templateUrl: './detalles-course.component.html',
  styleUrls: ['./detalles-course.component.css']
})

export class DetallesCourseComponent {
  courses: Course[] = [];
  courseId: string = '';
  curse: Course | undefined;
  form: FormGroup;

  constructor(
    private courseService: CourseService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      lat: [[Validators.required]],
      lng: [[Validators.required]],
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.courseId = routeParams.get('id')!;

    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });

    this.courseService.getCouse(this.courseId).subscribe((course) => {
      if (course) {
        this.form.patchValue({
          nombre: course.name,
          descripcion: course.description,
          duracion: course.duration,
          lat: course.coordinates?.lat,
          lng: course.coordinates?.lng,
        });

        this.curse = course;
      } else {
        console.error('Course no encontrado');
      }
    });
  }
}
