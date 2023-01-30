import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [issue, setIssue] = useState([]);
  const [page, setPage] = useState(1);

  const url = `https://github-issue-page123.onrender.com/issues?page=${page}`;
  useEffect(() => {
    async function getPost() {
      const response = await axios.get(url);
      setIssue(response.data.issue);
      console.log(response.data.issue);
    }
    getPost();
  }, [page]);
  function increasePage() {
    if (page !== 0) {
      setPage(page + 1);
    }
  }
  function decreasePage() {
    if (page !== 0) {
      setPage(page - 1);
    }
  }

  function CloseThisIssue(data) {
    const newIssue = {
      open: false,
      status_text: 'Closed',
    };
    axios
      .put(`https://github-issue-page123.onrender.com/issues/${data}`, newIssue)
      .then((res) =>
        res.data.success === true
          ? (window.location = '/')
          : console.log('Not created')
      );
  }
  if (issue.length === 0)
    return (
      <>
        <div className='home_container'>
          <p>'No issue found!'</p>
          <Pagination increasePage={increasePage} decreasePage={decreasePage} />
        </div>
      </>
    );

  return (
    <>
      <div className='home_container'>
        <nav class='navbar navbar-expand-lg bg-body-tertiary'>
          <div class='container-md'>
            <Link to='/opened'>Opened Issue</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/closed'>Closed Issue</Link>
          </div>
        </nav>
        <div className='inner_container'>
          {issue.map((issue) => (
            <div key={issue._id} className='card w-100 mb-2'>
              <div className='card-body'>
                <h5 className='card-title'>{issue.issue_title}</h5>
                <p className='card-text'>{issue.issue_text}</p>
                <p className='card-text'>{issue.status_text}</p>
              </div>
              {issue.open === true ? (
                <button
                  onClick={() => CloseThisIssue(issue._id)}
                  className='btn btn-info'
                >
                  Close this issue
                </button>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        <Pagination increasePage={increasePage} decreasePage={decreasePage} />
      </div>
    </>
  );
};

export default Home;
