import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleView } from '../redux/actions';

const ViewToggle = () => {
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleView());
  };

  return (
    <button className="view-toggle" onClick={handleToggleClick}>
      Toggle View
    </button>
  );
};

export default ViewToggle;
