# 📝 To-Do List

A simple full-stack To-Do List web application built using React, Node.js, Express.js and MongoDB.

## 🚀 Live Demo

Frontend: [To-Do List](https://rathi-todo-list.netlify.app/)

Backend: https://to-do-list-irb2.onrender.com/

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 💾 Store tasks in MongoDB
- 📱 Responsive design
- 🔄 Data fetched from backend API

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Deployment
- Netlify – Frontend
- Render – Backend

## 📂 Project Structure

```text
To-Do-List/
│
├── Frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
│
├── Backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── package.json
│
└── README.md

⚙️ How to Run Locally
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL

2. Run Frontend
cd Frontend
npm install
npm run dev

3. Run Backend
cd Backend
npm install
npm start

🔗 API Endpoints
Method	Endpoint	Description
GET	/todos	Get all tasks
POST	/todos	Add a new task
PUT	/todos/:id	Update a task
DELETE	/todos/:id	Delete a task

📌 Future Improvements
User authentication
Task categories
Due dates and reminders
Search and filter options

👩‍💻 Author
Rathi

