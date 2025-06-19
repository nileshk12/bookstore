# 📚 Full-Stack Bookstore App (Node.js + React + Docker)

This is a simple full-stack Bookstore web application built with:

- 🖥️ **Backend**: Node.js + Express (REST API)
- 🌐 **Frontend**: React (via Vite)
- 🐳 **DevOps**: Docker + Docker Compose

---

## 📁 Project Structure

```
bookstore-app/
├── backend/              # Node.js Express API
│   ├── app.js
│   ├── routes/
│   ├── books.json
│   ├── Dockerfile
├── frontend/             # React frontend (Vite)
│   ├── src/
│   ├── Dockerfile
├── docker-compose.yml    # Runs frontend + backend together
└── README.md
```

---

## 🚀 Features

- View list of books
- Add a new book
- Delete a book
- React-based frontend
- Express backend using JSON file as mock DB
- Fully containerized using Docker & Compose

---

## 🛠️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/your-username/bookstore-app.git
cd bookstore-app
```

### 2. Build & Run with Docker Compose

```bash
docker-compose up --build
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000/books

### 3. Test API (Optional)

You can use Postman or curl:

```bash
curl http://localhost:3000/books
```

---

## 🐳 Docker Commands

To run in background:

```bash
docker-compose up -d
```

To stop services:

```bash
docker-compose down
```

---

## 💡 Dev Notes

- Backend uses `books.json` as simple data store
- CORS is enabled to allow frontend-backend communication
- Vite is used for fast React development

---

## 📌 Future Improvements

- Add a database (MongoDB or PostgreSQL)
- Add user login/authentication
- Add book edit functionality
- Add testing with Jest and Supertest

---

## 🧑‍💻 Author

Built by Nilesh Kundu as part of a 30-day DevOps learning challenge.
