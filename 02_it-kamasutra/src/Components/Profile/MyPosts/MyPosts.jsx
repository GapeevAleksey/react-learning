import React, { createRef } from 'react';
import { rerenderDOM } from '../../../render';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => {
    return <Post id={post.id} message={post.message} url={post.url} />;
  });
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
