import { withDb } from '@/middleware';
import Kudos from '@/models/kudos';
import createKudoReqSchema from '@/schemas/createKudoReqSchema';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const {
            creator,
            description,
            isWhitelisted,
            metadata,
            title,
            whitelistedPublicKeys,
        } = await createKudoReqSchema.validate(req.body);
        const id = uuidv4();

        try {
            await Kudos.create({
                creator,
                description,
                id,
                isWhitelisted,
                metadata,
                title,
                whitelistedPublicKeys,
            });

            return res.status(200).json({
                message: 'A new kudo has been created',
                data: {
                    creator,
                    description,
                    id,
                    isWhitelisted,
                    metadata,
                    title,
                    whitelistedPublicKeys,
                },
            });
        } catch (err) {
            return res.status(500).json({
                message: 'An error occurred while creating a new kudo',
                error: err,
            });
        }
    }

    if (req.method === 'GET') {
        const id = req.query.id;

        try {
            const data = await Kudos.findOne({
                id,
            });

            if (!data) {
                return res.status(204);
            }

            return res.status(200).json({
                data: data,
            });
        } catch (err) {
            return res.status(500).json({
                message: "An error occurred while fetching the kudo's data",
                error: err,
            });
        }
    }

    return res.status(405).json({
        message: 'Method not allowed',
    });
};

export default withDb(handler);
