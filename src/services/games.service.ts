import { GameInfo } from "../protocols";
import gamesRepository from "../repositories/games.repository";


async function postGame(body: GameInfo) {
    const game = await gamesRepository.postGame(body);

    return game;
}

async function getGame() {
    const game = await gamesRepository.getGame();

    return game;
}

async function getGameById(gameId: number) {
    const game = await gamesRepository.getGameById(gameId);

    return game;
}

const gamesService = {
    postGame,
    getGame,
    getGameById
};

export default gamesService;