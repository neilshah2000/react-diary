import mongoose from 'mongoose';
import JournalEntry from './journalEntry';

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
    journalEntries: {
        type: [JournalEntry.schema]
    }
});

export default mongoose.model('Journal', JournalSchema);