import httpStatus from "http-status";
import supertest from "supertest";
import app, { init } from "../../src/app";
import { cleanDb } from "../services/helpers";

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('POST /games', () => {
  it('should create game', async () => {
    const body = {
      homeTeamName: "vasco",
      awayTeamName: "palmeiras"
    }
    const response = await server.post('/games').send(body);

    expect(response.status).toBe(201);
  });

})

describe('GET /games', () => {
  it('should get all games', async () => {
    const response = await server.get('/games');

    expect(response.status).toBe(200);
  });

  it('should get games by id', async () => {
    const response = await server.get('/games/1');

    expect(response.status).toBe(200);
  });

})
