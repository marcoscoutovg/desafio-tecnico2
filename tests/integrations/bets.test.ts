import supertest from "supertest";
import app, { init } from "../../src/app";
import { cleanDb } from "../services/helpers";

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('POST /bets', () => {
  it('should respond with status 201 when body is valid', async () => {
    const body = { 
      homeTeamScore: 2,
      awayTeamScore: 1, 
      amountBet: 1000,
      gameId: 1,
      participantId: 1,
    }
    const response = await server.post("/bets").send(body);
    expect(response.status).toBe(201);
  });

})