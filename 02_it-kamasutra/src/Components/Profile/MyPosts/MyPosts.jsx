import React, { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => {
    return <Post key={post.key} message={post.message} url={post.url} />;
  });
  let newPostElement = createRef();

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={props.addPost(newPostElement)}>Add post</button>
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
