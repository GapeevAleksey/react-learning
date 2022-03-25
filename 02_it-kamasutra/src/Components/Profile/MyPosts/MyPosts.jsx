import React from 'react';
import { store } from '../../Redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log(props);
  const postsElements = props.profilePage.posts.map((post) => {
    return <Post id={post.id} message={post.message} url={post.url} />;
  });
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost.call(store); // изменить на правильный контекст и удалить import { store } from '../../Redux/state';
  };

  const onChangePost = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          value={props.profilePage.newPostText}
          onChange={onChangePost}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
