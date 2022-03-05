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
  ];

  return (
    <div className={s.post}>
      <Post {...params[0]} />
      <Post {...params[1]} />
    </div>
  );
};

export default MyPosts;
