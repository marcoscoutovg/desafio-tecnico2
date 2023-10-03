import { Response, Request } from "express";
import httpStatus from "http-status";
import { BetInfo } from "../protocols";
import betsService from "../services/bets.service";

export async function postBet(req: Request, res: Response) {
    const body = req.body as BetInfo;

    try {
        const bet = await betsService.postBet(body);
        return res.status(httpStatus.OK).send(bet);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}