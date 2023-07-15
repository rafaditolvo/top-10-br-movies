import { Schema, Document } from 'mongoose';

export interface Like extends Document {
  movieId: number;
  userId: string;
}

export const LikeSchema = new Schema({
  movieId: { type: Number, required: true },
  userId: { type: String, required: true },
});
