import { Schema, models, model } from 'mongoose';

const kudosSchema = new Schema({
    creator: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    metadata: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    isWhitelisted: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    whitelistedPublicKeys: {
        type: Array,
    },
});

export default models.Kudos || model('Kudos', kudosSchema);
