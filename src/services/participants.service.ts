import { ParticipantInfo } from "../protocols";
import participantsRepository from "../repositories/participants.repository";

async function postParticipant(body: ParticipantInfo) {
    const participant = await participantsRepository.postParticipant(body);

    return participant;
}

async function getParticipant() {
    const participant = await participantsRepository.getParticipant();

    return participant;
}

const participantsService = {
    postParticipant,
    getParticipant
};

export default participantsService;