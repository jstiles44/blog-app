import './Posts.css';
import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await getPosts();
      setPosts(resp);
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts-list">
      <h1 className="posts-list-title">Posts</h1>
      <div className="posts">{posts}</div>
    </div>
  );
};

export default Posts;  
