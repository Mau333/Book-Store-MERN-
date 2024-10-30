import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongodbURL = process.env.MONGODB_URL;

// Debug logging
console.log('MongoDB URL from env:', process.env.MONGODB_URL);