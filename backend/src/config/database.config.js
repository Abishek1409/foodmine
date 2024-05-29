import { connect, set } from 'mongoose';

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI);
  
    console.log('connect successfully---');
  } catch (error) {
    console.log(error);
  }
};