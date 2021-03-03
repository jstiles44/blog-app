import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { useParams, Link, Redirect } from 'react-router-dom';
import { getPost, deletePost} from '../../services/posts.js'

const PostDetail = (props) => {

  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post);
      setLoaded(true);
    }
    fetchPost();
  }, [id])

  if (!isLoaded) {
    return <h1> Loading ... </h1>
  }
  const handleDelete = (id) => {
    deletePost(id);
    setDeleted(true);
  
  }

  if (isDeleted) {
    return <Redirect to={`/`} />;
  }

  
  return (
    <div>
      <Layout>
        <div className='post-detail'>
          <img className='detail-image' src={post.imgURL} alt={post.headline} />
          <div className='details'>
            <div className='title'> {post.headline}</div>
            <div className='author'> {post.author}</div>
            <div className='content'>{post.content}</div>

            <div className='buttons'>
              <button className='edit'> <Link className='edit-link' to={`/posts/edit/${post._id}`}>Edit </Link></button>
              <button className='delete' onClick={() => handleDelete(post._id)}> Delete </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PostDetail;