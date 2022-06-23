import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

const withDb = handler => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            // eslint-disable-next-line no-console
            console.log(`Connected to MongoDB: ${process.env.MONGO_URI}`);
            return handler(req, res);
        } catch (error) {
            return res.status(500).json({ message: 'Something went wrong' });
        }
    };
};

export { withDb };
