import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { AuthModule } from "../src/auth/auth.module";
import { AuthService } from "../src/auth/auth.service";
import { INestApplication } from "@nestjs/common";

describe("Auth", () => {
  let app: INestApplication;

  const mockUser = { username:"admin", password: "admin"}
  const mockWrongUser = { username:"joao", password: "12345"}
  

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST auth/login success`, () => {
    return request(app.getHttpServer())
    .post("/auth/login")
    .send(mockUser)
    .expect(200)
    .expect((response) => {
      const {access_token} = response.body;
      expect(typeof access_token).toBe("string")
    })
  });
  
  it(`/POST auth/login fail`, () => {
    return request(app.getHttpServer())
    .post("/auth/login")
    .send(mockWrongUser)
    .expect(401)
  });

  afterAll(async () => {
    await app.close();
  });
});
