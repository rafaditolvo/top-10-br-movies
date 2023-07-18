import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { MoviesModule } from "../src/movies/movies.module";
import { MoviesService } from "../src/movies/movies.service";
import { INestApplication } from "@nestjs/common";

describe("Movies", () => {
  let app: INestApplication;
  let moviesService = {
    getPopularMovies: () => [
      {
        adult: false,
        backdrop_path: "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
        genre_ids: [28, 12, 878],
        id: 667538,
        original_language: "en",
        original_title: "Transformers: Rise of the Beasts",
        overview:
          "Transformers: O Despertar das Feras traz mais uma aventura épica pelo universo dos transformers. Ambientada nos anos 1990, o filme apresentará os Maximals, Predacons e Terrorcons à batalha existente na Terra entre Autobots e Decepticons.",
        popularity: 11856.991,
        poster_path: "/zEqwfO5R2LrrLgV61xm8M9TmNTG.jpg",
        release_date: "2023-06-08",
        title: "Transformers: O Despertar das Feras",
        video: false,
        vote_average: 7.3,
        vote_count: 1304,
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MoviesModule],
    })
      .overrideProvider(MoviesService)
      .useValue(moviesService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET movies`, () => {
    return request(app.getHttpServer())
      .get("/movies/popular")
      .expect(200)
      .expect(moviesService.getPopularMovies());
  });

  afterAll(async () => {
    await app.close();
  });
});
