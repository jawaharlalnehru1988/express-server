import express from 'express';
import { bookController } from '../controller/book-controller';
import { authMiddleware } from './authMiddleware';
const userrouter = express.Router();
userrouter.use(authMiddleware);


userrouter.route("/fetch-user").get(bookController.getUser);

userrouter.route("/new-user").post(bookController.addNewUser);



userrouter.route("/delete/:id").delete(bookController.deleteUser);

 userrouter.route("/update/:id").put(bookController.updateUser);

export default userrouter;
