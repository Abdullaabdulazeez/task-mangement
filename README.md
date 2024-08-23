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

#### User Routes
POST /api/auth/register: Register a new user.
POST /api/auth/login: Authenticate a user and retrieve a JWT.
#### Task Routes
POST /api/tasks: Create a new task (Admin, User).
GET /api/tasks: Retrieve all tasks (Admin, User).
PUT /api/tasks/:id: Update a task by ID (Admin).
DELETE /api/tasks/:id: Delete a task by ID (Admin).


