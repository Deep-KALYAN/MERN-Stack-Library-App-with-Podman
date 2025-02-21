# **Library Management System - MERN Stack CRUD Application**

This is a **MERN Stack** (MongoDB, Express.js, React, Node.js) application for managing a library. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books through a RESTful API. The application is containerized using **Podman**.

---

## **Features**

- **Backend**: RESTful API built with Node.js, Express, and MongoDB.
- **Frontend**: User-friendly interface built with React and Bootstrap.
- **Containerization**: Separate Dockerfiles for backend and frontend using Podman.
- **API Endpoints**: Supports CRUD operations for books.
- **Validation**: Basic validation for required fields (title, author, ISBN).

---

## **Technologies Used**

- **Backend**: Node.js, Express, MongoDB, Mongoose, CORS.
- **Frontend**: React, React Router DOM, Axios, Bootstrap.
- **Containerization**: Podman (Dockerfiles for backend and frontend).

---

## **Prerequisites**

- **Node.js** (v16 or higher)
- **MongoDB** (running locally or remotely)
- **Podman** (or Docker) for containerization

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/library-app.git
cd library-app
```
Access the application:

Frontend: http://localhost:5173

Backend API: http://localhost:3000

API Documentation
Base URL
Copy
http://localhost:3000/api/books
Endpoints
HTTP Method	Endpoint	Description
GET	/api/books	Retrieve the list of all books.
POST	/api/books	Add a new book.
GET	/api/books/:id	Retrieve details of a specific book.
PUT	/api/books/:id	Update an existing book.
DELETE	/api/books/:id	Delete a book.
GET	/status	Check server status and database connection.
Request and Response Examples
1. Add a New Book
Request:

http
Copy
POST /api/books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "ISBN": "9780743273565"
}
Response:

json
Copy
{
  "_id": "64f1b2c8e4b0f5a2d8e7f1a2",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "ISBN": "9780743273565",
  "__v": 0
}
2. Retrieve All Books
Request:

http
Copy
GET /api/books
Response:

json
Copy
[
  {
    "_id": "64f1b2c8e4b0f5a2d8e7f1a2",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "ISBN": "9780743273565"
  }
]
3. Retrieve a Specific Book
Request:

http
Copy
GET /api/books/64f1b2c8e4b0f5a2d8e7f1a2
Response:

json
Copy
{
  "_id": "64f1b2c8e4b0f5a2d8e7f1a2",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "ISBN": "9780743273565"
}
4. Update a Book
Request:

http
Copy
PUT /api/books/64f1b2c8e4b0f5a2d8e7f1a2
Content-Type: application/json

{
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald",
  "ISBN": "9780743273565"
}
Response:

json
Copy
{
  "_id": "64f1b2c8e4b0f5a2d8e7f1a2",
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald",
  "ISBN": "9780743273565"
}
5. Delete a Book
Request:

http
Copy
DELETE /api/books/64f1b2c8e4b0f5a2d8e7f1a2
Response:

json
Copy
{
  "message": "Book deleted"
}
Error Handling
400 Bad Request: Missing or invalid fields.

404 Not Found: Book not found.

500 Internal Server Error: Server-side error.
