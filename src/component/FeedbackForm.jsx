import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitFeedback } from '../redux/actions';
import '../Styles/FeedbackForm.css'

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(submitFeedback(feedback));
      setFeedback({
        name: '',
        email: '',
        message: '',
      });
    } else {
      console.error('Please fill in all fields.');
    }
  };

  const validateForm = () => {
    return feedback.name.trim() !== '' && feedback.email.trim() !== '' && feedback.message.trim() !== '';
  };

  return (
    <div className="feedback-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={feedback.name} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={feedback.email} onChange={handleChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={feedback.message} onChange={handleChange} />

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FeedbackForm;
