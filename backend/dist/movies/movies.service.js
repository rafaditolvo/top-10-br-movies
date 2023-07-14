"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let MoviesService = exports.MoviesService = class MoviesService {
    async getPopularMovies() {
        const apiKey = '4f0b208f6f47c15720981a0ca2adac58';
        const endpoint = 'https://api.themoviedb.org/3/movie/popular';
        const params = {
            api_key: apiKey,
            language: 'pt-BR',
            region: 'BR',
        };
        try {
            const response = await axios_1.default.get(endpoint, { params });
            const movies = response.data.results;
            return movies;
        }
        catch (error) {
            throw new Error('Failed to fetch popular movies from TMDB.');
        }
    }
};
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)()
], MoviesService);
//# sourceMappingURL=movies.service.js.map