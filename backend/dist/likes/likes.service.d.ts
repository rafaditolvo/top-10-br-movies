import { Model } from 'mongoose';
import { Like } from './like.model';
export declare class LikesService {
    private likeModel;
    constructor(likeModel: Model<Like>);
    createLike(movieId: number, movieName: string, userId: string): Promise<any>;
    updateMostLikedMoviesView(): Promise<any>;
    getMostLikedMovies(): Promise<any>;
}
