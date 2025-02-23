# Attendance Management System

This is a full-stack Attendance Management System built with React, Node.js, Express, and MongoDB. It allows you to add and manage students, subjects, timetables, and attendance records. The system includes a modern UI with features to mark attendance and view attendance details with visual indicators.

## Features

- **Student Management:** Add and view students.
- **Subject Management:** Add and view subjects.
- **Timetable Management:** Create timetables for different days and subjects.
- **Attendance Marking:** Mark student attendance (present/absent) for selected dates and subjects.
- **Attendance Overview:** Display attendance records with visual indicators (green circle for present, red circle for absent).

## Project Structure

attendance-management-system/ ├── client │ ├── package.json │ ├── public/ │ │ └── index.html │ └── src/ │ ├── index.js │ ├── App.jsx │ ├── pages/ │ │ ├── AttendancePage.jsx │ │ ├── StudentPage.jsx │ │ ├── SubjectPage.jsx │ │ └── TimetablePage.jsx │ ├── components/ │ │ ├── Attendance.jsx │ │ ├── AttendanceDisplay.jsx │ │ ├── StudentForm.jsx │ │ ├── StudentList.jsx │ │ ├── SubjectForm.jsx │ │ ├── SubjectList.jsx │ │ ├── TimetableForm.jsx │ │ └── TimetableList.jsx │ └── styles/ │ ├── Attendance.module.css │ ├── AttendanceDisplay.module.css │ ├── StudentForm.module.css │ ├── StudentList.module.css │ ├── SubjectForm.module.css │ ├── SubjectList.module.css │ ├── TimetableForm.module.css │ └── TimetableList.module.css └── server ├── package.json ├── server.js └── models/ ├── Student.js ├── Subject.js ├── Timetable.js └── Attendance.js


## Installation

### Prerequisites

- [Node.js and npm](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running (or use MongoDB Atlas).

### Setting Up the Server

1. Navigate to the server folder:

   ```bash
   cd server
Install dependencies:

   ```bash
   npm install

Start the server:

   ```bash
   npm start
The server runs on port 5001 by default. Ensure MongoDB is running and the connection string in server.js matches your setup (default is mongodb://localhost:27017/attendanceDB).

Setting Up the Client
Open a new terminal window and navigate to the client folder:

   ```bash
   cd client
Install dependencies:
 
   ```bash
   npm install
Start the client application:

   ```bash
   npm start
The React app runs on port 3000 by default.

Usage
Students:
Navigate to the Students page to add and view student records.

Subjects:
Navigate to the Subjects page to add and view subjects.

Timetables:
Create and view timetables for various days and subjects.

Attendance:

On the Attendance page, select a subject and date.
Mark each student as present or absent.
Submit to record the attendance.
View attendance records with a clear visual indicator (green circle for present, red circle for absent) using the Attendance Overview component.
Troubleshooting
Data Not Showing Up:

Verify that your server is running on port 5001.
Use Postman or MongoDB Compass to check that attendance records are being created in the database.
Check the browser console and network tab for any API request errors.
MongoDB Connection:
Ensure that your MongoDB instance is running and that the connection string in server.js is correct.

CORS Issues:
The server is configured with CORS enabled. If you run into issues, verify that requests are allowed from the client origin.

Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to modify.

License
This project is licensed under the MIT License.

Acknowledgments
React
Express
MongoDB
Mongoose
