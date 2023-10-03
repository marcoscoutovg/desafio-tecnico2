import { BetInfo } from "../protocols";
import betsRepository from "../repositories/bets.repository";

async function postBet(body: BetInfo) {
    const bet = await betsRepository.postBet(body);

    return bet;
}

const betsService = {
    postBet
};

export default betsService;