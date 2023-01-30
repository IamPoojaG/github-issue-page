import mongoose from 'mongoose';

const modelSchema = mongoose.Schema(
  {
    issue_title: {
      type: String,
      required: true,
    },
    issue_text: {
      type: String,
      required: true,
    },

    open: {
      type: Boolean,
      required: true,
    },
    created_by: {
      type: String,
    },
    assigned_to: {
      type: String,
    },
    status_text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model('Issue', modelSchema);

export default Issue;
