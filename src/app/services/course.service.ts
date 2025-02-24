import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  
  private url = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Course[]>(this.url);
  }

  getCouse(id: string) {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  addCourse(course: Course) {
    return this.http.post(this.url, course);
  }

  updateCourse(course: Course) {
    return this.http.put(`${this.url}/${course.id}`, course);
  }

  deleteCourse(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
