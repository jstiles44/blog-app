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


  const POSTS = items.map((item, index) => (
    <div key={index}>
      <p>{posts.headline}</p>
      <p>{posts.author}</p>
      <p>{posts.content}</p>
      <img className="post-image" src={posts.imgURL} alt={post image} />
      <input type="button" value="up" />
      <input type="button" value="down" id={index} onClick={handleDown} />
    </div>
  ));

  return (
    <div className="posts-list">
      <h2 className="posts-list-title">Posts</h2>
      <div className="posts">{POSTS}</div>
    </div>
  );
};

export default Posts;  
