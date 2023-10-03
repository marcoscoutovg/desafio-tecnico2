import supertest from "supertest";
import app, { init } from "../../src/app";
import { cleanDb } from "../services/helpers";

beforeAll(async () => {
  await init();
  await cleanDb();
});


const server = supertest(app);

describe('POST /participants', () => {
  it('should create participant', async () => {
    const body = {
      name: "marcos",
      balance: 1000
    }
    const response = await server.post('/participants').send(body);
    expect(response.status).toBe(201);
  });

})

describe('GET /participants', () => {
    it('should get all participant', async () => {
      const response = await server.get('/participants');
  
      expect(response.status).toBe(200);
    });
  
  })
