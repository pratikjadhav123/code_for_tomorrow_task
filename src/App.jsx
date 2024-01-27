import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';
import Card from './component/Card';
import BottomNavigation from './component/BottomNavigation';
import ViewToggle from './component/ViewToggle';
import FeedbackForm from './component/FeedbackForm';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    // Fetch posts on component mount
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* <ViewToggle /> */}
          <ViewToggle/>
          <FeedbackForm />
          <div className="card-list">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
            <BottomNavigation />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
