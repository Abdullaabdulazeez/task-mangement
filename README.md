## Overview

This project is a backend API for a Task Management System that provides secure authentication and role-based access control using JSON Web Tokens (JWT). It is built with Node.js and Express, with an emphasis on code quality, security, and maintainability.

## Features

- **User Authentication**: Secure user registration and login with JWT-based authentication.
- **Role-Based Access Control**: Different roles (e.g., Admin, User) with permissions based on roles.
- **Task Management**: CRUD operations for tasks with role-based access control.
- **Task Filtering**: Retrieve and filter tasks based on priority, status, and assigned user.
- **Security**: Route guards and middleware for role-based access control and input validation.
- **Code Quality**: Followed best practices and used appropriate design patterns.

## Technologies

Node.js, Express.js

### Installation

1. Clone the repository:
git clone git@github.com:Abdullaabdulazeez/task-mangement.git
cd task-management-system

- Node.js installed on your machine

2. **Install Dependencies:**
   - npm install

3. **Set Up Environment Variables:**
   - JWT_SECRET= "Your_jwt_token"

4.4. **Start the Server:**
   - npm start


### API Endpoints
 #### Authentication
 ####  Register User

   - URL: /api/auth/register
   - Method: POST
   - Headers: Content-Type: application/json
   - Body: json

         {
           "name": "abdulla",
           "email": "abdulla@example.com",
           "password": "abdulla123"
         }
   - Response: json

         {
           "token": "your_jwt_token_here"
         }
  - Login User

  - URL: /api/auth/login
  - Method: POST
  - Headers: Content-Type: application/json
  - Body: json

      {
        "email": "abdulla@example.com",
        "password": "abdulla123"
      }
  - Response: json

         {
           "token": "your_jwt_token_here"
         }
  #### Tasks
    - Get All Tasks

    - URL: /api/tasks
    - Method: GET
    - Headers:
    - Authorization: Bearer your_jwt_token_here
    
  #### Create a Task

   - URL: /api/tasks
   - Method: POST
   - Headers:
   - Content-Type: application/json
   - Authorization: Bearer your_jwt_token_here
   - Body: json

         {
           "title": "New Task",
           "description": "Task description",
           "priority": "High",
           "status": "Pending",
           "assignedTo": "userId"
         }
  #### Update a Task

   - URL: /api/tasks/:taskId
   - Method: PUT
   - Headers:
   - ontent-Type: application/json
   - Authorization: Bearer your_jwt_token_here
   - Body: json

         {
           "title": "Updated Task",
           "description": "Updated task description",
           "priority": "Low",
           "status": "Completed",
           "assignedTo": "userId",
            "createdBy": "user name"
         }
  #### Delete a Task

   - URL: /api/tasks/:taskId
   - Method: DELETE
   - Headers:
   - Authorization: Bearer your_jwt_token_here


