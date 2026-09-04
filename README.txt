ALBA REALITY - IMY 220 Project
/////////////////////////////////
Deliverable 1
Cameron Ambraal
u25008227

Project Description:
-------------------
Alba Reality is a photo sharing website where users can share and discover space-themed photography.

Docker Commands:
---------------
To build and run both containers:
  docker-compose up --build

To stop containers:
  docker-compose down

To rebuild after changes:
  docker-compose up --build

To run in background:
  docker-compose up -d

To build frontend only:
  docker build -t alba-frontend ./frontend
  docker run -p 5173:5173 alba-frontend

To build backend only:
  docker build -t alba-backend ./backend
  docker run -p 3000:3000 alba-backend

GitHub Repository:
-----------------
https://github.com/yourusername/alba-reality

Features Implemented in D1:
--------------------------
✓ React + Vite project setup
✓ Component structure with separation of concerns
✓ Routing (Splash, Home, Profile, Post pages)
✓ Client-side form validation (Login, Signup, Create Post, Edit Profile)
✓ Stubbed authentication endpoints (Login & Signup)
✓ Docker containerization
✓ Semantic HTML elements
✓ Responsive design
✓ Pinterest-style feed layout
✓ Custom space images

Form Validation:
---------------
- Login: Username required, Password min 6 characters
- Signup: Username min 3 chars, Email must contain @, Password min 6 chars, Password confirmation match
- Create Post: Caption required (min 3 chars), Image URL required (valid URL format)
- Edit Profile: Display name required

Test Credentials (Stubbed):
--------------------------
Login: Any username/password works (min 6 chars)
Signup: Any valid email with @ works

Access URLs:
-----------
Frontend: http://localhost:5173
Backend:  http://localhost:3000
Health Check: http://localhost:3000/api/health

Notes:
-----
- This is Deliverable 1 - Basic functionality with dummy data
- Database integration will be added in Deliverable 2
- Real authentication will be implemented in Deliverable 3
- All endpoints are stubbed for now
- Images are from Unsplash (online) for demo purposes