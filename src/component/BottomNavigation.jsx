import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/actions';
import "../Styles/BottomNavigation.css"

const BottomNavigation = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => Math.ceil(state.posts.length / 6));

  const handlePageClick = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="bottom-navigation">
      {renderPageNumbers()}
    </div>
  );
};

export default BottomNavigation;
