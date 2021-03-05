import { Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./PostCreate.css"
import { createPost } from "../../services/posts";
import { useState } from "react";

const PostCreate = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [post, setPost] = useState({
    headline: "",
    content: "",
    author: "",
    imgURL: "https://i.ibb.co/cL8wtdc/kiwi-slice.png",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="add-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-headline-add"
          placeholder="Headline (max-length: 90 characters)"
          value={post.headline}
          name="headline"
          required
          autoFocus
          onChange={handleChange}
          maxlength="90"
        />
        <input
          className="input-author"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          autoFocus
          onChange={handleChange}
          maxlength="45"
        />
        <input
          className="input-imgURL"
          placeholder="image url"
          value={post.imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <textarea
          className="textarea-content"
          rows={10}
          placeholder="Content"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        </form>
        </div>
    </Layout>
  );
};
export default PostCreate;
