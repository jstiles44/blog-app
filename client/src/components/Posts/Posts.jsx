import "./Posts.css";
import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await getPosts();
      setPosts(resp);
    };
    fetchPosts();
  }, [posts]);

  // console.log(posts)

  const POSTS = posts.map((post,index) => (
    <Link key={index} to={`/posts/${post._id}`}>
      <div className="homeScreenPosts">
        <p>{post.headline}</p>
        <p>{post.author}</p>
        <img className="post-image" src={post.imgURL} alt={"post"} />
      </div>
    </Link>
  ));

  // console.log(POSTS)

  return (
    <div className="posts-list">
      <h2 className="posts-list-title">Posts</h2>
      <div className="posts">{POSTS}</div>
    </div>
  );
};

export default Posts;
