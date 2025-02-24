import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}
  
    getStudents() {
      return this.http.get<Student[]>(this.url);
    }
  
    getStudent(id: string) {
      return this.http.get<Student>(`${this.url}/${id}`);
    }
  
    addStudent(student: Student) {
      return this.http.post(this.url, student);
    }
  
    updateStudent(student: Student) {
      return this.http.put(`${this.url}/${student.id}`, student);
    }
  
    deleteStudent(id: string) {
      return this.http.delete(`${this.url}/${id}`);
    }
}
