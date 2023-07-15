import { LikesService } from './likes.service';
export declare class LikesController {
    private likesService;
    constructor(likesService: LikesService);
    createLike(createLikeDto: {
        movieId: number;
    }, req: any): Promise<any>;
    getMostLikedMovies(): Promise<any>;
}
