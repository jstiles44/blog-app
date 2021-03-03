import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";
import { postPost } from "../../services/posts";
import { useState } from "react";

const postCreate = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [post, setPost] = useState({
    headline: "",
    content: "",
    author: "",
    imgURL: "",
  });

  const handleChange = (event) => {
    const { headline, value } = event.target;
    setProduct({
      ...product,
      [headline]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await postPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Nav>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-headline"
          placeholder="Headline"
          value={post.headline}
          name="headline"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          autoFocus
          onChange={handleChange}
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
      </form>
    </Nav>
  );
};
export default postCreate;
