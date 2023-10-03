import prisma from "../database/database";
import { BetInfo } from "../protocols";

export async function postBet(body: BetInfo) {
    return prisma.bet.create({
        data: {
            homeTeamScore: body.awayTeamScore,
            awayTeamScore: body.awayTeamScore,
            amountBet: body.amountBet,
            gameId: body.gameId,
            participantId: body.participantId,
            status: "PENDING",
            amountWon: 1000,
        },
    });
}

const betsRepository = {
    postBet
};

export default betsRepository;