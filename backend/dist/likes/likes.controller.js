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
exports.LikesController = void 0;
const common_1 = require("@nestjs/common");
const likes_service_1 = require("./likes.service");
let LikesController = exports.LikesController = class LikesController {
    constructor(likesService) {
        this.likesService = likesService;
    }
    async createLike(createLikeDto, req) {
        const userId = 'token';
        return this.likesService.createLike(createLikeDto.movieId, createLikeDto.movieName, userId);
    }
    async getMostLikedMovies() {
        const mostLikedMovies = await this.likesService.getMostLikedMovies();
        return mostLikedMovies;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LikesController.prototype, "createLike", null);
__decorate([
    (0, common_1.Get)('/most-liked'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LikesController.prototype, "getMostLikedMovies", null);
exports.LikesController = LikesController = __decorate([
    (0, common_1.Controller)('likes'),
    __metadata("design:paramtypes", [likes_service_1.LikesService])
], LikesController);
//# sourceMappingURL=likes.controller.js.map