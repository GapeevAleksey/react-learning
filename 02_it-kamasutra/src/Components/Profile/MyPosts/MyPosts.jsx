import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const params = [
    {
      key: 1,
      message: 'Hello! This is my second post!',
      url: 'https://oboi.ws/filters/vibrance_19_7314_oboi_krasivaja_buhta_240x320.jpg',
    },
    {
      key: 2,
      message: "Hi. It's a first post",
      url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
    },
    {
      key: 3,
      message: "Hi. It's a third post",
      url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
    },
  ];

  const postsElements = params.map((post) => {
    return <Post key={post.key} message={post.message} url={post.url} />;
  });

  console.log(postsElements);
  return <div className={s.post}>{postsElements}</div>;
};

export default MyPosts;
