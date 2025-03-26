import {NextFunction, Request, Response} from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'MYSECRETKEY';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user: string | JwtPayload;
    }
  }
}

export const authMiddleware = (req:Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
     res.status(401).json({ message: "Access Denied" });
     return;
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Access Denied. Invalid Token", error: err });
    return;
  }
};