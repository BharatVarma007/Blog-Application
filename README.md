# Full Stack Blog Application

A simple and elegant full-stack blog application built with **Django** (backend) and **Angular** (frontend). It includes user authentication, post creation/editing, commenting, and a seamless UI. Built for learning, demonstration, and lightweight publishing!

This application uses Bootstrap5 for styling.

---

##  Features

-User Registration and Login (JWT Auth)  
-Create, View, Edit, Delete Blog Posts  
-Comment on Posts (Edit/Delete own comments)  
-Auth-based Conditional Rendering (Only authors can edit/delete)  
-Responsive UI with Bootstrap  
-Terminal Launcher Script to run both backend and frontend  
-Auto-opens the blog in Google Chrome  
-Clean code using Angular Standalone Components

---

## 📁 Project Structure

```
blog_final/
├── blog_backend/          # Django Backend
│   ├── manage.py
│   └── blog/              # Django App with API views
│
├── blog-frontend/         # Angular Frontend
│   ├── src/
│   └── angular.json
│
├── start.py                 # Python script to launch backend + frontend
└── README.md              # You're reading it!
```

---

## Requirements

- Python 3.8+
- Node.js + Angular CLI
- Conda (for environment management)
- MacOS (for terminal automation with AppleScript)

---

## Setup Instructions

### Backend (Django)

```bash
cd blog_backend
conda create -n django python=3.10
conda activate django
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend (Angular)

```bash
cd blog-frontend
npm install
ng serve
```

---

## Easy Launch (MacOS Only)

Instead of manually running both, use:

```bash
python run.py
```

This will:
- Start Django server in a new Terminal tab
- Start Angular server in another tab
- Wait a few seconds...
- Open the blog at [http://localhost:4200](http://localhost:4200) in Chrome
- Optionally: Close Terminal when Chrome is closed 

---

## API Endpoints

### Authentication

- `POST /api/register/` – Register a new user  
- `POST /api/token/` – Login to receive JWT access/refresh tokens  

### Posts

- `GET /api/posts/`  
- `POST /api/posts/`  
- `GET /api/posts/<id>/`  
- `PATCH/DELETE /api/posts/<id>/`

### Comments

- `POST /api/comments/`  
- `PATCH/DELETE /api/comments/<id>/`

---


## Notes

- The backend is protected with JWT; the Angular app stores tokens in localStorage.
- Only authenticated users can create/edit/delete posts/comments.
- All API interactions are done using Angular’s `HttpClient` with headers.

---

## Author

**Bharat Varma**  
🌐 [GitHub](https://github.com/BharatVarma007) | ✉️ saibharatvarma123@gmail.com

---

## 📜 License

This project is licensed under the MIT License — feel free to fork and use!

---

> 💬 “Code is like humor. When you have to explain it, it’s bad.” — Cory House
