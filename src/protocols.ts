export type BetInfo = {
    homeTeamScore: number;
    awayTeamScore: number;
    amountBet: number;
    gameId: number;
    participantId: number;
}

export type ParticipantInfo = {
    name: string;
    balance: number;
}

export type GameInfo = {
    homeTeamName: string;
    awayTeamName: string;
}