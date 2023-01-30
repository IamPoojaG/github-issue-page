import React, { useState } from 'react';
import axios from 'axios';

const CreatePage = () => {
  const [post, setPost] = useState({
    issue_title: '',
    issue_text: '',
    open: true,
    created_by: '',
    assigned_to: '',
    status_text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevIssue) => {
      return {
        ...prevIssue,
        [name]: value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newIssue = {
      issue_title: post.issue_title,
      issue_text: post.issue_text,
      created_by: post.created_by,
      assigned_to: post.assigned_to,
      open: true,
      status_text: 'Opened',
    };
    axios
      .post('https://github-issue-page123.onrender.com/issues/add', newIssue)
      .then((res) =>
        res.data.success === true
          ? (window.location = '/')
          : console.log('Not created')
      );
  };
  return (
    <>
      <div className='create_container'>
        <h3>Create New issue</h3>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Issue title: </label>
            <input
              type='text'
              required
              className='form-control'
              name='issue_title'
              value={post.issue_title}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Issue text: </label>
            <input
              type='text'
              required
              className='form-control'
              name='issue_text'
              value={post.issue_text}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Created by: </label>
            <input
              type='text'
              className='form-control'
              name='created_by'
              value={post.created_by}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Assigned to: </label>
            <input
              type='text'
              className='form-control'
              name='assigned_to'
              value={post.assigned_to}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='submit'
              value='Create an issue'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePage;
