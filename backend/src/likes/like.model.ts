import { Schema, Document } from 'mongoose';

export interface Like extends Document {
  movieId: number;
  movieName: string;
  userId: string;
}

export const LikeSchema = new Schema({
  movieId: { type: Number, required: true },
  movieName: { type: String, required: true }, 
  userId: { type: String, required: true },
});
