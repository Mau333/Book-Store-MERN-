A full-stack bookstore application built with the MERN stack (MongoDB, Express, React, Node.js).

## Technologies Used
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Authentication: JWT

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   
   cd client && npm install
   cd ../server && npm install
   
3. Create .env file based on .env.example
4. Run the development servers:
   # Start backend (from backend directory)
   npm start
   
   # Start frontend (from frontend directory)
   npm run dev


## Environment Variables
Create a .env file in the backend directory with the following variables:
- PORT: Server port number
- MONGODB_URI: MongoDB Atlas connection string
- CLIENT_URL: Frontend application URL
