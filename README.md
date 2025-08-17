#  Prescripto Appointment App (MERN)

Prescripto is a full-stack medical appointment platform built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse doctors, book appointments, and manage profiles. It also includes an admin dashboard for managing doctors, appointments, and analytics.

---

## 📁 Project Structure

prescripto-appointment/
│
├── backend/ # Node.js + Express API
├── frontend/ # User-facing React app
└── admin/ # Admin dashboard (React)

---

## 🧩 Tech Stack

| Layer       | Tech Used                    |
|------------|-------------------------------|
| Frontend    | React.js (Vite), Axios       |
| Backend     | Node.js, Express.js          |
| Database    | MongoDB Atlas (Mongoose)     |
| Auth        | JWT Tokens                   |
| Admin Panel | React.js                     |

---

## 🚀 Features

### 👨‍⚕️ User (Frontend)
- Browse doctors by speciality
- Book appointments
- Authentication (login/signup)
- View appointment status and availability
- Responsive UI

### ⚙️ Backend (API)
- RESTful API endpoints
- MongoDB database connection
- JWT authentication & token handling
- CRUD operations on doctors, users, and appointments

### 🛠️ Admin Panel
- Admin login
- Manage doctor profiles & availability
- View all appointments
- Dashboard with analytics
- Controlled access to dashboard

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Gdhanush-13/Prescripto-Appointment.git
cd Prescripto-Appointment
2. Frontend Setup (/frontend)
bash
Copy
Edit
cd frontend
npm install
npm run dev
Create a .env file in frontend/:

env
Copy
Edit
VITE_BACKEND_URL=http://localhost:5000
3. Backend Setup (/backend)
bash
Copy
Edit
cd ../backend
npm install
npm run dev
Create a .env file in backend/:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
4. Admin Panel Setup (/admin)
bash
Copy
Edit
cd ../admin
npm install
npm run dev
Create a .env file in admin/:

env
Copy
Edit
VITE_ADMIN_API_BASE_URL=http://localhost:5000
🔐 Authentication
JWT tokens are used for secure user authentication.
Tokens are stored in localStorage and sent via headers for protected routes.

📦 API Overview
👤 User APIs
Endpoint	Method	Description
/api/user/register	POST	Register new user
/api/user/login	POST	Login user
/api/user/get-profile	GET	Get user profile

👨‍⚕️ Doctor APIs
Endpoint	Method	Description
/api/doctor/list	GET	List all doctors

🏥 Admin APIs
Endpoint	Method	Description
/api/admin/all-doctors	GET	Get all doctors
/api/admin/change-availability	POST	Toggle doctor availability
/api/admin/appointments	GET	Get all appointments
/api/admin/cancel-appointment	POST	Cancel appointment
/api/admin/dashboard	GET	Dashboard stats

👨‍💻 Author
Dhanush — Website Implementation Specialist | Full Stack Developer
Feel free to contribute or fork this project.

📄 License
MIT License — use it for personal or commercial projects.

✅ Tips

MongoDB Atlas should have IP whitelisting configured.

Use strong JWT secrets for production.

For deployment, consider:

Frontend, Backend, Admin : Render( Suggested)
