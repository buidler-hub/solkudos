import { withDb } from '../../middleware';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        return res.status(200).json({ name: 'hello' });
    }
    return res.status(405).json({ message: 'Method not allowed' });
};

export default withDb(handler);
