import React from "react";
import GetBlogPosts from "../../components/firebaseQueries/getBlogPosts"

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <GetBlogPosts />
        </div>
      </div>
    </div>
  );
};

export default Home;