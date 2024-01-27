import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../redux/actions';

const Card = ({ post }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeCard(post.id));
  };

  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="remove-button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

export default Card;
