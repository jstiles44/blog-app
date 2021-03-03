import axios from "axios";

const apiUrl = `https://lymewyre.herokuapp.com/api`;

export const getPosts = async () => {
  try {
    const response = await axios(`${apiUrl}/posts`);
    const posts = response.data;
    return posts;
  } catch (error) {
    throw error;
  }
};
export const getPost = async (id) => {
  try {
    const response = await axios(`${apiUrl}/posts/${id}`);
    const post = response.data;
    return post;
  } catch (error) {
    throw error;
  }
};



export const createPost = async (post) => {
  try {
    const response = await axios.post(`${apiUrl}/posts`, post);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const response = await axios.put(`${apiUrl}/posts/${id}`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
