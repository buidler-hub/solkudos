import { withDb } from '@/middleware';
import Kudos from '@/models/kudos';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
