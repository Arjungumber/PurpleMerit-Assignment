# PurpleaMerit Assignment

# User Management System

This project is a Full-Stack User Management System built as part of an assignment submission. It includes authentication, role-based access control, and admin user management, with a clean UI and secure backend APIs.The application is split into separate frontend and backend deployments and is fully deployed on Vercel, following real-world production practices.
---

## Features

### Authentication & Authorization:
- User registration and login using JWT authentication
- Role-based access control (admin, user)
- Protected routes using middleware
- Secure password hashing with bcrypt

### User Roles:
- Admin and User roles
- Role-based navigation and access control
- Admin-only dashboard access

### Admin:
- View all registered users.
- Activate / Deactivate users using a single API endpoint.
- User status management with real-time UI updates.
- Pagination support.

### User Profile:
- View profile details.
- Update profile information.
- Change password with visibility toggle.
- Loading overlay to avoid layout shift.

---

## Tech Stack
- **Frontend:** React, Axios, Tailwind CSS, React Hot Toast
- **Backend:** Node.js, Express.js, Mongoose, dotenv, bcrypt, JWT 
- **Database:** MongoDB
- **Other:** NPM for package management

## Deployment
- Frontend deployed on Vercel
- Backend deployed on Vercel as serverless functions
- Separate environment variables for frontend and backend
- Proper CORS configuration for secure cross-origin communication

## Environment Configuration
- **Frontend:** REACT_APP_API_URL=https://<backend-vercel-url>/api
- **Backend:**  MONGO_URI=your_mongodb_connection_string, JWT_SECRET=your_jwt_secret

---

# Task API Documentation
## Base URL
http://localhost:5000

## Authentication
All endpoints require a JWT token in the headers:
`Authorization: Bearer <token>`

# User Endpoints

### 1. Get Me
**Endpoint:** `GET /api/users/me`  

**Description:**  
- helps get the loggenIn user profile.  
 
**Request Example:**
```bash
GET /api/users/me
```

**Response Example:**
```json
[
  {
    "_id": "650c3f2a9f1e4d0012345678",
    "email" : "john@email.com",
    "fullName" :"John Smit",
    "status": "active",
    "createdBy": {
    }
  }
]
```

### 2. Update profile
**Endpoint:** `PUT /api/users/me` 
**Description:**  
- Updates user email, fullName

**Response Example:**
```json
{
  "_id": "...",
  "fullName": "John Smith",
  "email": "john@email.com",
  "status": "active",
  "createdBy": "..."
}
```

### 3. change password
**Endpoint:** `PUT /api/users/password` 
**Description:**  
- Updates password of a user.
- requires the current password

**Response Example:**
```json
{
  "_id": "...",
  "fullName": "John Smith",
  "email": "john@email.com",
  "status": "active",
  "createdBy": "...",
  "message" : "password updated successfully"
}

```

# Admin Api Endpoints

### 1. Get all Users
**Endpoint:** `GET /api/admin/users`
**Description:**  
- Gets all the users from db.
- Only admin can access.

**Query Parameters (optional):**  

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `page`    | number | current page to show|
| `limit`  | number | sets the limit for fetched users. |

**Request Example**
```bash
GET api/admin/users?page=1&&limit=10
```

**Response Example**
```json
0 : {_id: '69549cae3a642a8e49e572a8', fullName: 'max holden', email: 'max1@gmail.com', role: 'user', status: 'active', …}
1 : {_id: '6953c54013f49efb9b2cca23', fullName: 'Arjun', email: 'arjun@gmail.com', role: 'admin', status: 'active', …}
2: {_id: '69537ac7fd17f0f652f6b9c8', fullName: 'john smit', email: 'john@gmail.com', role: 'user', status: 'active', …}
```

### 2. update user status
**Endpoint:** `Put /api/admin/user/:id/:action`
**Description:**  
- Update the user status.
- Only admin can update.

**Request Example**
```bash
PUT api/admin/user/69549cae3a642a8e49e572a8/active
```
**Response Example**
```json
 {_id: '69549cae3a642a8e49e572a8', fullName: 'max holden', email: 'max1@gmail.com', role: 'user', status: 'active', message:'user has been activated' }
```

# Auth API Endpoints

### 1. Signup
**Endpoint:** `POST /api/auth/signup`

### 2. Login
**Endpoint:** `POST /api/auth/login`

### 3. Get Profile
**Endpoint:** `GET /api/auth/me`  

**Description:**  
- Fethces the user detail from the database.
- Returns the currently logged-in user's profile
- User is identified via JWT token (_id from MongoDB)

**Authorization:**
- Requires valid JWT token

**Response Example:**
```json
{
  "_id": "650c3f2a9f1e4d0012345678",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}

```

# Installation
1. **Clone the repository:**
   ```bash
   git clone (https://github.com/Arjungumber/Assignment.git)
   cd assignment


2.  **Install Dependencies**
    ```bash
    npm install


 3. **Setup Environment variables** 
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret 
    PORT=5000


4. **Run the backend Server**
   ```bash
   npm run dev


5. **Run the frontend**
   ```bash
   npm run start

6. **Open the app**
   Visit http://localhost:3000 in your browser.


## Usage

Admin Login: Can view and manage all users, perform CRUD operations.

Employee Login: Can view only their profile and perform updates over their email, name and password.                 
