import {GET_USERS ,GET_POSTS ,GET_COMMENTS } from '../constant/action-types';
import axios from 'axios';


export const getUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data;
        dispatch({ type: GET_USERS, payload: users });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const getPosts = (id) => {
    return (dispatch) => {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => {
          const posts = response.data;
          dispatch({ type: GET_POSTS, payload: posts });
        })
        .catch(error => {
          console.log(error);
        });
    };
  };
  export const getComments = (id) => {
    return (dispatch) => {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => {
          const comments = response.data;
          dispatch({ type: GET_COMMENTS, payload: comments });
        })
        .catch(error => {
          console.log(error);
        });
    };
  };

