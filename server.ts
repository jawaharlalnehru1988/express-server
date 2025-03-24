import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from "./Routers/userRoute";
import bookRouter from './Routers/bookRoute';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/Librarydb';
mongoose.connect(dbUrl).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err));

app.use("/userapi", router);
app.use("/bookapi", bookRouter);
                    
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});