import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.url} />
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
