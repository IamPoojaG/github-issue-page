import Issue from '../Models/issueModels.js';

export const createIssue = (req, res) => {
  const {
    issue_title,
    issue_text,
    created_by,
    assigned_to,
    status_text,
    open,
  } = req.body;
  const newModel = new Issue({
    issue_title,
    issue_text,
    created_by,
    assigned_to,
    status_text,
    open,
  })
    .save()
    .then(() =>
      res
        .status(201)
        .json({ success: true, message: 'Issue created successfully' })
    )
    .catch((err) => res.status(500).json(`Error:${err}`));
};

export const getIssue = (req, res) => {
  const { id: userID } = req.params;
  Issue.findById(userID)
    .sort({ _id: -1 })
    .then((issue) => res.status(200).json({ issue }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
export const getAllIssue = (req, res) => {
  const page = req.query.page;
  const pageSize = 5;
  Issue.find({})
    .sort({ _id: -1 })
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .then((issue) => res.status(200).json({ issue }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const getIssueByOpen = (req, res) => {
  const page = req.query.page;
  const pageSize = 5;
  Issue.find({ open: req.query.open })
    .sort({ _id: -1 })
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .then((issue) => res.status(200).json({ issue }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const updateIssue = (req, res) => {
  const { id: issueId } = req.params;
  Issue.findById(issueId)
    .then((issue) => {
      issue.open = req.body.open;
      issue.status_text = req.body.status_text;
      issue
        .save()
        .then(() =>
          res
            .status(201)
            .json({ success: true, msg: 'Issue updated successfully' })
        )
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
