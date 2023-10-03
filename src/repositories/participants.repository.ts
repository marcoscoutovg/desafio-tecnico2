import prisma from "../database/database";
import { ParticipantInfo } from "../protocols";

export async function postParticipant(body: ParticipantInfo) {
    return await prisma.participants.create({
        data: {
            name: body.name,
            balance: body.balance
        }
    });
}

export async function getParticipant() {
    return await prisma.participants.findMany();
}

const participantsRepository = {
    postParticipant,
    getParticipant
};

export default participantsRepository;