import dotenv from 'dotenv';
dotenv.config();

console.log("All env variables:", process.env);
console.log("MongoDB URL:", process.env.MONGODB_URL);
