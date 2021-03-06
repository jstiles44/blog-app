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
        <div className="headline-home">{post.headline}</div>
        <div className="author-home">{post.author}</div>
          <div className="image-container-home">
          <img className="post-image" src={post.imgURL} alt={"post"} />
          </div>
      </div>
    </Link>
  ));

  // console.log(POSTS)

  return (
    <div className="posts-list">
      <div className="posts">{POSTS}</div>
    </div>
  );
};

export default Posts;
