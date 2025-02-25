import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-students',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.css'
})
export class EditStudentsComponent {
  courses: Course[] = [];
  form: FormGroup;
  studentId: string = "";
  students: Student[] = [];

  constructor(private courseService: CourseService, private route: ActivatedRoute, private studentService: StudentService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      onGoing: ['', [Validators.required]],
      course: [[Validators.required]]
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.studentId = routeParams.get('id')!;

    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });

    this.studentService.getStudents().subscribe((students) =>{
      this.students = students
      console.log(students);
    })

    this.studentService.getStudent(this.studentId).subscribe((student) => {
      this.form.patchValue({
        name: student.name,
      age: student.age,
      address: student.address,
      onGoing: student.onGoing,
      course: student.course
      })
    })
  }

  submit() {
    if (this.form.valid) {
      const nuevoStudent: Student = {
        id: (Number(this.courses[this.courses.length - 1].id) + 1).toString(),
        name: this.form.value.name,
        age: this.form.value.age,
        address: this.form.value.address,
        onGoing: this.form.value.onGoing,
        course: this.form.value.course
      };

      this.studentService.addStudent(nuevoStudent).subscribe(() => {
        this.students.push(nuevoStudent);
        this.form.reset();
      });
    }
  }
}
