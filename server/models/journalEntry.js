import mongoose from 'mongoose';

const JournalEntrySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: 'Date is required',
    },
    entry: {
        type: String,
    },
});

export default mongoose.model('JournalEntry', JournalEntrySchema);