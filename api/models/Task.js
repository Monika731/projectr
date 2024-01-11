const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const TaskSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true,
      trim: true
    },
    lane: {
      type: Number,
      required: true
    }
  });
  
  mongoose.model('tasks', TaskSchema);