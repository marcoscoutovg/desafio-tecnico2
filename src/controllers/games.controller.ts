import { Response, Request } from "express";
import httpStatus from "http-status";
import { GameInfo } from "../protocols";
import gamesService from "../services/games.service";

export async function postGame(req: Request, res: Response) {
    const body = req.body as GameInfo;

    try {
        const game = await gamesService.postGame(body);
        res.status(httpStatus.OK).send(game);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getGame(req: Request, res: Response) {

    try {
        const game = await gamesService.getGame();
        res.status(httpStatus.OK).send(game);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getGameById(req: Request, res: Response) {
    const { id } = req.params

    try {
        const game = await gamesService.getGameById(Number(id));
        res.status(httpStatus.OK).send(game);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}