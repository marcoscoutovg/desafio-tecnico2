import { prisma } from "../database/database";
import { GameInfo } from "../protocols";

export async function postGame(body: GameInfo) {
    return await prisma.game.create({
        data: {
            awayTeamName: body.awayTeamName,
            homeTeamName: body.homeTeamName,
            homeTeamScore: 0,
            awayTeamScore: 0,
            isFinished: false
        },
    });
}

export async function getGame() {
    return await prisma.game.findMany();
}

export async function getGameById(gameId: number) {
    return await prisma.game.findFirst({
        where: {
            id: gameId,
        },
        include: {
            Bet: true,
        },
    });
}

const gamesRepository = {
    postGame,
    getGame,
    getGameById
};

export default gamesRepository;