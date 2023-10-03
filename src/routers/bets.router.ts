import { Router } from "express";
import { postBet } from "../controllers/bets.controller";

const betsRouter = Router();

betsRouter.post("/bets", postBet)

export default betsRouter;