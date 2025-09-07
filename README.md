# 📞 Contact Manager Backend (Node.js + Express + MongoDB)

This is a **Contact Manager REST API** built using **Node.js, Express, and MongoDB** with JWT authentication.
It allows users to **Register, Login, and Manage Contacts (CRUD operations).**

---

## ✨ Features

🔐 JWT Authentication - Secure user registration and login
📝 Full CRUD Operations - Create, read, update, and delete contacts
🔒 Protected Routes - Authentication required for contact management
🛡️ Password Security - bcrypt hashing for secure password storage
⚡ Error Handling - Comprehensive error handling middleware
📋 Validation - Input validation for all requests
🧑‍💻 User Management - Get current user information

---

## 🏗️ Project Structure

backend/
├── config/           # Database connection configuration
├── controllers/      # Business logic for users & contacts
├── middleware/       # Authentication & error handling
├── models/           # Mongoose schemas and models
├── routes/           # API route definitions
├── server.js         # Application entry point
├── .env              # Environment variables
└── package.json      # Dependencies and scripts

---

- **
# ⚙️ Installation & Setup

- Follow these steps to run the project locally:

1. Clone the repository:

- git clone https://github.com/devkashyap5858/contact-manager-backend.git
- cd contact-manager-backend

2. Install dependencies:

- npm install
- npm install cors

3. Create a .env file in root and add:

- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_secret_key

4. Start the server:

- npm run dev
- Server will start at: http://localhost:5000

---

## 🔌 API Endpoints

## 👤 Authentication Routes

Method	    Endpoint	                     Description	                     Auth Required

POST	      /api/users/register	           Register a new user	               No
POST	      /api/users/login	             Login & receive JWT token	         No
GET	        /api/users/current	           Get current user info	             Yes

## 📒 Contact Routes (All Protected)

Method	     Endpoint	                      Description

GET	         /api/contacts	                Get all contacts for user
POST	       /api/contacts	                Create a new contact
GET	         /api/contacts/:id	            Get a specific contact
PUT	         /api/contacts/:id	            Update a contact
DELETE	     /api/contacts/:id	            Delete a contact

---

## 🛠️ Tech Stack

- **Runtime: Node.js**
- **Framework: Express.js**
- **Database: MongoDB with Mongoose ODM**
- **Authentication: JSON Web Tokens (JWT)**
- **Password Hashing: bcryptjs**
- **Environment Variables: dotenv**
- **Development: nodemon for auto-restart**

---

## 🧪 Testing with Thunder Client

1. User Registration

- Method: POST

- URL: http://localhost:5000/api/users/register

- Body (raw JSON):

- json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}


2. User Login

- Method: POST

- URL: http://localhost:5000/api/users/login

- Body (raw JSON):

- json
{
  "email": "john@example.com",
  "password": "password123"
}

- Response: Includes JWT token for authenticated requests

3. Create Contact (Protected)

- Method: POST

- URL: http://localhost:5000/api/contacts

- Headers:

text
Authorization: Bearer <your_jwt_token>

Content-Type: application/json
Body (raw JSON):

- json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "123-456-7890"
}

4. Get All Contacts (Protected)

- Method: GET

- URL: http://localhost:5000/api/contacts

- Headers:

text
Authorization: Bearer <your_jwt_token>

5. Get Single Contact (Protected)

- Method: GET

- URL: http://localhost:5000/api/contacts/:id

- Headers:

text
Authorization: Bearer <your_jwt_token>


6. Update Contact (Protected)

- Method: PUT

- URL: http://localhost:5000/api/contacts/:id

- Headers:

text
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
Body (raw JSON):

json
{
  "name": "Alice Smith",
  "email": "alice.smith@example.com",
  "phone": "987-654-3210"
}

7. Delete Contact (Protected)

- Method: DELETE

- URL: http://localhost:5000/api/contacts/:id

- Headers:

text
Authorization: Bearer <your_jwt_token>

8. Get Current User (Protected)

- Method: GET

- URL: http://localhost:5000/api/users/current

- Headers:

text
Authorization: Bearer <your_jwt_token>

---

### 🌐 CORS Configuration

This backend uses **CORS** to allow requests from the React frontend.

In `server.js`:

```js
import cors from "cors";

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

---


## 👨‍💻 Author
- **Dev Kashyap**



