import { Routes } from '@angular/router';
import { FormCoursesComponent } from './components/courses/form-courses/form-courses.component';
import { ListarCoursesComponent } from './components/courses/listar-courses/listar-courses.component';
import { FormStudentsComponent } from './components/students/form-students/form-students.component';
import { ListarStudentsComponent } from './components/students/listar-students/listar-students.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { EditCoursesComponent } from './components/courses/edit-courses/edit-courses.component';
import { EditStudentsComponent } from './components/students/edit-students/edit-students.component';
import { DetallesCourseComponent } from './components/courses/detalles-course/detalles-course.component';

export const routes: Routes = [
    { path: '', component:EntradaComponent},
    { path: 'listarCourses', component: ListarCoursesComponent},
    { path: 'listarStudents', component: ListarStudentsComponent},
    { path: 'formCourse', component: FormCoursesComponent},
    { path: 'formStudent', component: FormStudentsComponent},
    { path: 'editCourse/:id', component: EditCoursesComponent},
    { path: 'editStudent/:id', component: EditStudentsComponent},
    { path: 'detallesCourse/:id', component: DetallesCourseComponent}

];
