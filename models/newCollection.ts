import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the document
interface UsersModel extends Document {
  id:number;
  username: string;
  password: string;
  email: string;
  phone: string;
  role: string;
}

// Define the schema
const UsersSchema: Schema = new Schema({
  id: { type: Number },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  phone: { type: String },
  role: { type: String },
});

export const UsersCollection = mongoose.model<UsersModel>('member', UsersSchema);

interface LibraryModel extends Document{
  id: number;
  title: string;
  pages: number;
  author: string;
  isbn: number;
  image: string;
  count: number;
  categories: string;
};

const BookCollectionSchema: Schema = new Schema({
  id: { type: Number },
  title: { type: String },
  pages: { type: Number },
  author: { type: String },
  isbn: { type: Number },
  image: { type: String },
  count: { type: Number },
  categories: { type: String },
  });

  export const BookCollection = mongoose.model<LibraryModel>('BookCollection', BookCollectionSchema);



