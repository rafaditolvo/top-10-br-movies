import { LikesService } from './likes.service';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    createLike(createLikeDto: {
        movieId: number;
        movieName: string;
    }, req: any): Promise<any>;
    getMostLikedMovies(): Promise<any>;
}
