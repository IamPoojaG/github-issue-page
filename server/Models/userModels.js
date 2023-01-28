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
    created_on: {
      type: String,
      required: true,
    },

    updated_on: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },

    assigned_to: {
      type: String,
      required: true,
    },
    status_text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    open: true,
  }
);

const Model = mongoose.model('Model', modelSchema);

export default Model;
