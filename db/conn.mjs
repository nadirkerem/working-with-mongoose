import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbURI = process.env.ATLAS_URI;

const options = {
  dbName: 'sample_training',
};

async function dbConnect() {
  try {
    await mongoose.connect(dbURI, options);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database: ', error);
    process.exit(1);
  }
}

export default dbConnect;
