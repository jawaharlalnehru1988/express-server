import express from 'express';
import { bookController } from '../controller/book-controller';
const userrouter = express.Router();


userrouter.route("/fetch-user").get(bookController.getUser);

userrouter.route("/new-user").post(bookController.addNewUser);

userrouter.route("/register").post(bookController.registerNewUser);

userrouter.route("/login").post(bookController.loginUser);

userrouter.route("/delete/:id").delete(bookController.deleteUser);

 userrouter.route("/update/:id").put(bookController.updateUser);

export default userrouter;
