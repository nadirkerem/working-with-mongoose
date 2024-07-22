import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  type: String,
  score: Number,
});

const gradeSchema = new mongoose.Schema({
  student_id: Number,
  class_id: Number,
  scores: [scoreSchema],
});

export default mongoose.model('Grade', gradeSchema);
