import mongoose from 'mongoose';

const JournalSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required',
        uniqe: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
});

export default mongoose.model('Journal', JournalSchema);