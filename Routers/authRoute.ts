import express from 'express';
import { bookController } from '../controller/book-controller';
const authRouter = express.Router();

authRouter.route("/register").post(bookController.registerNewUser);
authRouter.route("/login").post(bookController.loginUser);

export default authRouter;