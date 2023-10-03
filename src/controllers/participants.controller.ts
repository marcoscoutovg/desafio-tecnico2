import { Response, Request } from "express";
import httpStatus from "http-status";
import { ParticipantInfo } from "../protocols";
import participantsService from "../services/participants.service";

export async function postParticipant(req: Request, res: Response) {
    const body = req.body as ParticipantInfo;

    try {
        const participant = await participantsService.postParticipant(body);
        res.status(httpStatus.OK).send(participant);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getParticipant(req: Request, res: Response) {

    try {
        const participant = await participantsService.getParticipant();
        res.status(httpStatus.OK).send(participant);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}