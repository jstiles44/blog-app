import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout'; 
import { getPost, updatePost} from '../../services/posts.js'


const PostEdit = (props) => {

  const [post, setPost] = useState({
    author: '',
    content: '',
    imgURL: '',
    headline: ''
  })

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    }
    fetchPost();
  }, [id])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
  }

  return (
    <div>
      <Layout>
        <div className='product-edit'>
          <div className='image-container'>
            <img className='edit-image' src={post.imgURL} alt={post.name} />

            <form onSubmit={handleSubmit}>
              <input className='edit-image-link'
                placeholder='Image Link'
                value={post.imgURL}
                name='imgURL'
                required
                onChange={handleChange}/>
            </form>
          </div>

          <form className='edit-form' onSubmit={handleSubmit}>
            <input
              className='input-name'
              placeholder='Name'
              value={post.author}
              name='name'
              required
              onChange={handleChange} />
            <input 
              className='input-headline'
              placeholder='Headline:'
              value={post.headline}
              name='headline'
              required
              onChange={handleChange} />
            <textarea
              className='textarea-content'
              rows={20}
              cols={40}
              placeholder='Enter Content'
              value={post.content}
              name='content'
              required
              onChange={handleChange} />
            
            <button type='submit' className='change-button'> Update</button>
          </form>
        </div>
      </Layout>
      
    </div>
  );
};

export default PostEdit;