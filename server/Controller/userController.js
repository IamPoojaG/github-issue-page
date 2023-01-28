import Model from '../Models/userModels.js';

export const createPage = (req, res) => {
  const {
    issue_title,
    issue_text,
    created_on,
    updated_on,
    created_by,
    assigned_to,
    status_text,
  } = req.body;

  const newModel = new Model({
    issue_title,
    issue_text,
    created_on,
    updated_on,
    created_by,
    assigned_to,
    status_text,
  })
    .save()
    .then(() =>
      res.status(201).json({ success: true, msg: 'Page created successfully' })
    )
    .catch((err) => res.status(500).json(`Error:${err}`));
};

export const getPage = (req, res) => {
  const { id: userID } = req.params;
  Model.findById(userID)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const updatePage = (req, res) => {
  const { id: postID } = req.params;
  Post.findById(postID)
    .then((user) => {
      user.issue_title = req.body.issue_title;
      user.issue_text = req.body.issue_text;
      user.created_on = req.body.created_on;
      user.updated_on = req.body.updated_on;
      user.created_by = req.body.created_by;
      user.assigned_to = req.body.assigned_to;
      user.status_text = req.body.status_text;
      user
        .save()
        .then(() =>
          res
            .status(201)
            .json({ success: true, msg: 'Page updated successfully' })
        )
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const deletePage = (req, res) => {
  const { id: userID } = req.params;
  Model.findByIdAndDelete(userID)
    .then(() =>
      res.status(200).json({ success: true, msg: 'Page deleted successfully' })
    )
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
