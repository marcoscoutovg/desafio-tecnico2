import { Router } from "express";
import { getParticipant, postParticipant } from "../controllers/participants.controller";

const participantsRouter = Router();

participantsRouter.post("/participants", postParticipant)
participantsRouter.get("/participants", getParticipant)

export default participantsRouter;