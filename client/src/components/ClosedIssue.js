import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const ClosedIssue = () => {
  const [issue, setIssue] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    ClosedIssue();
  }, [page]);
  function increasePage() {
    setPage(page + 1);
  }
  function decreasePage() {
    setPage(page - 1);
  }
  async function ClosedIssue() {
    const open = false;
    console.log(page);
    const response = await axios.get(
      `http://localhost:8000/issues/open/closed?page=${page}&open=${open}`
    );
    setIssue(response.data.issue);
    console.log(response.data.issue);
  }
  function CloseThisIssue(data) {
    const newIssue = {
      open: false,
      status_text: 'Closed',
    };
    axios
      .put(`http://localhost:8000/issues/${data}`, newIssue)
      .then((res) =>
        res.data.success === true ? (window.location = '/') : console.log('!')
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
        <div className='inner_container'>
          {issue.map((issue) => (
            <div key={issue._id} className='card w-100 mb-2'>
              <div className='card-body'>
                <h5 className='card-title'>{issue.issue_title}</h5>
                <p className='card-text'>{issue.issue_text}</p>
                <p className='card-text'>{issue.status_text}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination increasePage={increasePage} decreasePage={decreasePage} />
      </div>
    </>
  );
};

export default ClosedIssue;
