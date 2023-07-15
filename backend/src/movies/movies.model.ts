import { Schema, Document } from 'mongoose';

export interface Movie extends Document {
  movieId: number;
  movieName: string;
  poster_path: string;
}

export const MovieSchema = new Schema({
  movieId: { type: Number, required: true },
  movieName: { type: String, required: true },
  poster_path: { type: String, required: true }
});

