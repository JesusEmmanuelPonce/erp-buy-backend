import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    unique: true,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    maxlength: 255,
    trim: true,
  },
  status: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const category = mongoose.model("Category", categorySchema);

export default category;
