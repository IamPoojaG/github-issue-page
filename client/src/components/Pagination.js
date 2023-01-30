import React from 'react';

const Pagination = ({ increasePage, decreasePage }) => {
  return (
    <>
      <nav aria-label='...'>
        <ul className='pagination'>
          <li className='page-item'>
            <p className='page-link' onClick={decreasePage}>
              Previous
            </p>
          </li>
          <li className='page-item'>
            <p className='page-link' onClick={increasePage}>
              Next
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
