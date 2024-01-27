import axios from 'axios';

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const REMOVE_CARD = 'REMOVE_CARD';
export const SET_PAGE = 'SET_PAGE';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK';

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

export const removeCard = (postId) => ({
  type: REMOVE_CARD,
  payload: postId,
});

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: pageNumber,
});

export const toggleView = () => ({
  type: TOGGLE_VIEW,
});

export const submitFeedback = (feedback) => ({
  type: SUBMIT_FEEDBACK,
  payload: feedback,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
