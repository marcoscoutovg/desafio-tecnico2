import express, { Request, Response, Express } from "express";
import router from "./routers/index.router";
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from "./config/database";

dotenv.config();

const app = express();

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK!");
});

app.use(cors())
app.use(express.json())
app.use(router);


export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export default app;