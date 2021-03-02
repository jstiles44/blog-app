import './Posts.css';
import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";
import {Link} from "react-router-dom"

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await getPosts();
      setPosts(resp);
    };
    fetchPosts();
  }, []);


  const POSTS = items.map((post) => (
    <Link key={post.id} to={`/post/${post.id}`}>
      <div className='homeScreenPosts'key={post.id}>
      <p>{posts.headline}</p>
      <p>{posts.author}</p>
      <p>{posts.content}</p>
      <img className="post-image" src={posts.imgURL} alt={post image} />
      <input type="button" value="up" />
      <input type="button" value="down" id={index} onClick={handleDown} />
    </div>
    </Link> 
  ));

  return (
    <div className="posts-list">
      <h2 className="posts-list-title">Posts</h2>
      <div className="posts">{POSTS}</div>
    </div>
  );
};

export default Posts;  
