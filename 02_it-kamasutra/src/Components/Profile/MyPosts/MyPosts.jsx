import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => {
    return <Post key={post.key} message={post.message} url={post.url} />;
  });

  console.log(postsElements);
  return <div className={s.post}>{postsElements}</div>;
};

export default MyPosts;
