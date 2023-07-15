import { Model } from 'mongoose';
import { Like } from './like.model';
export declare class LikesService {
    private likeModel;
    constructor(likeModel: Model<Like>);
    createLike(movieId: number, movieName: string, userId: string): Promise<Like>;
    getMostLikedMovies(): Promise<any>;
}