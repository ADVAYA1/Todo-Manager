
---

# 📝 Task Manager - MERN Stack

A full-stack **Task Management (Todo)** web application built with the **MERN stack**. This project enables users to register, log in, and manage tasks efficiently using a sleek, responsive UI and a secure backend. Features include authentication, task CRUD operations, drag-and-drop reordering, filtering, and persistent storage with MongoDB Atlas.

---

## 🚀 Project Overview

- **Name**: Task Manager  
- **Type**: Full-Stack Web Application  
- **Frontend**: React, Tailwind CSS, Redux, React Query  
- **Backend**: Node.js, Express.js, MongoDB Atlas  
- **Database**: MongoDB (via Mongoose)  
- **Authentication**: JWT + Bcrypt  
- **Drag & Drop**: React Beautiful DND  
- **Form Validation**: React Hook Form + Zod  
- **UI Components**: Flowbite, Lucide, React Icons  
- **Notifications**: React Toastify  

---

## 🔧 Features

### 🧑‍💼 User Features
- Register and login securely with JWT  
- Passwords hashed with bcrypt  
- Signed cookies for secure token storage  
- Optional profile picture  

### ✅ Task Management
- Create, update, delete tasks  
- Assign tasks to users  
- Filter tasks by:
  - **Status**: To Do, In Progress, Done  
  - **Priority**: Low, Medium, High  
- Drag and drop to reorder tasks  

### 💻 UI/UX
- Responsive design with Tailwind CSS  
- Toast notifications and loading spinners  
- Validated forms with Zod  
- Seamless navigation with React Router  

---

## 🗂️ Tech Stack

### Frontend
- `React` (SPA architecture)  
- `Vite` (fast dev server)  
- `Tailwind CSS`, `Flowbite`, `Lucide`, `React Icons`  
- `Redux Toolkit`, `React Query` for state management  
- `React Hook Form`, `Zod` for forms  
- `Axios` for API communication  
- `Firebase` (optional: for auth or storage)  
- `React Beautiful DND` (task reordering)  

### Backend
- `Express.js`, `Node.js`  
- `MongoDB` + `Mongoose`  
- `JWT`, `Bcrypt` for auth  
- `dotenv`, `cookie-parser`, `cors`, `nodemon`  

---

## 🔐 Security

- JWT-based authentication  
- Bcrypt password hashing  
- Secure cookies (`httpOnly`, `signed`)  
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

Let me know if you'd like me to export this into a `README.md` file for download or push it directly into your GitHub repo.
