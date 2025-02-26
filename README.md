# courses-platform
Project for web client environment, course platform in which we have a structure of students, teachers and courses. With this I will make a small outline of what will be my integrated project. At first we will only have the administration of students with their courses, where a student can do multiple courses.

The administrators will be able to add students and the students will be able to choose different courses.

###EJECUTE
Open the index.html with the live server or by running npx live-server inside the project folder

The student will have the following data: name (text), id (number), age (number), address (coordinates) and if he is doing a course (boolean).

The course will have the following data: name (text), id (number), duration (time), name to put in coordinates, finished (boolean).

## Description of folders and files

### Main files
- **package.json**: Contains the project dependencies and scripts.
- README.md**: This file contains the project documentation.

### `src` directory.
Contains the project source code:
- **index.html**: Main page.
- main.js**: Main JavaScript file.

#### Subdirectory `student`.
Files related to student management:
- **student.css**: Student specific styles.
- student.js**: Student logic.
- createStudent.html**: Page to create a student.
- editStudent.html**: Page to edit a student.
- listStudents.html**: Page with the list of students.

#### Subdirectory `assets`.
JSON files that serve as example data:
- **alumnos.json**: List of students.
- teachers.json**: List of teachers.

#### Subdirectory `css`.
- main.css**: Main style file.

#### Subdirectory `course`: Course subdirectory.
Files related to course management:
- **createCourse.html**: Page to create a course.
- course.css**: Course specific styles.
- course.js**: Course logic.
- editCourse.html**: Page to edit a course.
- CourseList.html**: Page with the list of courses.
