import {Request, Response} from 'express';
import { UsersCollection } from '../models/newCollection';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'MYSECRETKEY';


export const bookController = {
  getUser: async (req: Request, res: Response) => {
    try {
      const documents = await UsersCollection.find();
      res.json(documents);
    } catch (err) {
      res.status(400).json({ err });
    }
  },
  addNewUser: async (req: Request, res: Response) => {
    try {
      const newDocument = new UsersCollection({
        id: req.body.id,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
      });
      const savedDocument = await newDocument.save();
      res.status(201).json(savedDocument);
    } catch (err) {
      res.status(400).json({ err });
    }
  },

  registerNewUser: async (req: Request, res: Response) => {
    try {
      const { id, username, email, password, phone, role } = req.body;

      const existingUser = await UsersCollection.findOne({ username });
      if (existingUser) {
        res.status(400).json({ message: "Username already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UsersCollection({
        id,
        username,
        email,
        password: hashedPassword,
        phone,
        role,
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },

  loginUser: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await UsersCollection.findOne({ email });
      if (!user) {
        res.status(401).json({ message: "Invalid username or password" });
      } else {
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          res.status(401).json({ message: "Invalid username or password" });
        } else {
          const token = jwt.sign(
            { userId: user._id, userName: user.username, userEmail: user.email, userRole: user.role }, 
            JWT_SECRET, {expiresIn: "1h"}
            );
        res.json({
            token,
            userId: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
          });
        }
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      console.log(id);
      const deletedDocument = await UsersCollection.findByIdAndDelete(id);

      if (!deletedDocument) {
        res.status(404).json({ message: "Document not found" });
      }

      res.json(deletedDocument);
    } catch (err) {
      res.status(400).json({ err });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const updatedDocument = await UsersCollection.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.json(updatedDocument);
    } catch (err) {
      res.status(400).json({ err });
    }
  }
};