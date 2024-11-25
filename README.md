# Todo API

A simple RESTful API for managing a to-do list, built with **Express** and validated using **Zod**. This API allows users to perform CRUD operations on tasks, mark tasks as completed, and categorize them.

---

## Features
- **Add Tasks**: Create new tasks with a title, description, and category.
- **View All Tasks**: Retrieve all tasks in the database.
- **Get Task by ID**: Retrieve details of a specific task by its ID.
- **Edit Tasks**: Update task details (title, description, category, etc.).
- **Mark Tasks as Completed**: Toggle the completion status of a task.
- **Delete Tasks**: Remove tasks from the database.

---

## Tech Stack
- **Express**: Lightweight and fast web framework for building APIs.
- **Zod**: Schema validation library for ensuring input data integrity.
- **MongoDB**: NoSQL database for storing tasks.

---

## Requirements
- Node.js
- MongoDB

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2.Install dependencies:
   npm install

3.Set up environment variables:
   Create a .env file in the root directory.
   Add your MongoDB URI:
   MONGO_URI=your-mongodb-uri
   
4.Start the server
 
   npm start
