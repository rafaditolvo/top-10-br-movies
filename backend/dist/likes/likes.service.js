"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LikesService = exports.LikesService = class LikesService {
    constructor(likeModel) {
        this.likeModel = likeModel;
    }
    async createLike(movieId, movieName, userId) {
        const newLike = new this.likeModel({ movieId, movieName, userId });
        const savedLike = await newLike.save();
        console.log('Curtida salva:', savedLike);
        return savedLike;
    }
    async getMostLikedMovies() {
        return this.likeModel
            .aggregate([
            { $group: { _id: '$movieId', totalLikes: { $sum: 1 } } },
            { $sort: { totalLikes: -1 } },
            {
                $lookup: {
                    from: 'movies',
                    localField: '_id',
                    foreignField: 'movieId',
                    as: 'movieDetails',
                },
            },
            {
                $unwind: '$movieDetails',
            },
            {
                $project: {
                    _id: 0,
                    movieId: '$_id',
                    totalLikes: 1,
                    movieTitle: '$movieDetails.title',
                },
            },
        ])
            .exec();
    }
};
exports.LikesService = LikesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Like')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LikesService);
//# sourceMappingURL=likes.service.js.map