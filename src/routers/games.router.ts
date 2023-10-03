import { Router } from "express";
import { getGame, getGameById, postGame } from "../controllers/games.controller";

const gamesRouter = Router();

gamesRouter.post("/games", postGame)
gamesRouter.get("/games", getGame)
gamesRouter.get("/games/:id", getGameById)

export default gamesRouter;