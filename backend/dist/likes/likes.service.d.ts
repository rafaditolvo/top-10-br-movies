import { Model } from 'mongoose';
import { Like } from './like.model';
export declare class LikesService {
    private likeModel;
    constructor(likeModel: Model<Like>);
    createLike(movieId: number, userId: string): Promise<Like>;
    getMostLikedMovies(): Promise<any>;
}
