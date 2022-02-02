import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
    category: {
        type: Schema.ObjectId,
        ref: 'category',
    },
    code: {
        type: String,
        maxlength: 64,
    },
    name: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        maxlength: 255,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const article = mongoose.model('article', articleSchema);

export default article;