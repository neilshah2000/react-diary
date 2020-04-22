import mongoose from 'mongoose';

const PromptSchema = new mongoose.Schema({
    text: {
        type: String,
    },
});

export default mongoose.model('Prompt', PromptSchema);