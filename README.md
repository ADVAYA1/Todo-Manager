
---

# 📝 Todo Manager - MERN Stack

A full-stack **Task Management (Todo)** web application built with the **MERN stack**. This project enables users to register, log in, and manage tasks efficiently using a sleek, responsive UI and a secure backend. Features include authentication, drag-and-drop reordering, filtering, and persistent storage with MongoDB Atlas.

---

## 🚀 Project Overview

- **Name**: Todo Manager  
- **Type**: Full-Stack Web Application  
- **Frontend**: React, Tailwind CSS, Redux, React Query  
- **Backend**: Node.js, Express.js, MongoDB Atlas  
- **Database**: MongoDB (via Mongoose)  
- **Authentication**: JWT   
- **Drag & Drop**: React Beautiful DND  
- **UI Components**: Flowbite, Lucide, React Icons  
- **Notifications**: React Toastify  

---

## 🔧 Features

### 🧑‍💼 User Features
- Register and login securely with JWT  
- Passwords hashed with bcrypt    

### ✅ Task Management
- Create Task (Title, Description, Category, Priority, Due date)
- update, delete tasks
- Search (using Title or Description)  
- Filter tasks by:
  - **Status**: To Do, In Progress, Done  
  - **Priority**: Low, Medium, High  
- Drag and drop to reorder tasks  

### 💻 UI/UX
- Responsive design with Tailwind CSS  
- Toast notifications   
- Seamless navigation with React Router  

---

## 🗂️ Tech Stack

### Frontend
- `React` 
- `Tailwind CSS`, `Flowbite`, `Lucide`, `React Icons`  
- `Redux Toolkit`, `React Query` for state management  
- `Axios` for API communication  
- `Firebase`  
- `React Beautiful DND` (task reordering)  

### Backend
- `Express.js`, `Node.js`  
- `MongoDB` + `Mongoose`  
- `JWT` for auth  
---

## 🔐 Security

- JWT-based authentication  
- Bcrypt password hashing   
- CORS protection  
- Input validations and schema constraints  
---

## ⚙️ Project Setup

### Frontend

```bash
cd client
npm install
npm run dev
```

Create a `.env` file:

```
VITE_BACKEND_BASE_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_key
```

### Backend

```bash
cd server
npm install
npm start
```

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FRONTEND_BASE_URL=http://localhost:5173
```

---

## 📄 License

MIT License

---

