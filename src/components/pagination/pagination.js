import React from 'react';
import './pagination.css';

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;