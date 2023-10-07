import express, { Request, Response, Express } from "express";
import router from "./routers/index.router";
import dotenv from 'dotenv';
import { connectDb } from "./database/database";

dotenv.config();

const app = express();

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK!");
});

app.use(express.json())
app.use(router);

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export default app;