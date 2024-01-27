import {
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    REMOVE_CARD,
    SET_PAGE,
    TOGGLE_VIEW,
    SUBMIT_FEEDBACK,
  } from './actions';
  
  const initialState = {
    posts: [],
    loading: true,
    currentPage: 1,
    viewMode: 'standard', // or 'alternate'
    feedback: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POST_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          loading: false,
        };
      case FETCH_POST_FAILURE:
        return {
          ...state,
          loading: false,
        };
      case REMOVE_CARD:
        const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
        return {
          ...state,
          posts: updatedPosts,
        };
      case SET_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
      case TOGGLE_VIEW:
        return {
          ...state,
          viewMode: state.viewMode === 'standard' ? 'alternate' : 'standard',
        };
      case SUBMIT_FEEDBACK:
        return {
          ...state,
          feedback: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  