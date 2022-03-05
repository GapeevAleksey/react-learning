import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <nav className={s.profile}>
      <div>
        <img src="https://i.pinimg.com/736x/b1/93/8e/b1938e033f60606863defdc3d631d4f8.jpg" />
      </div>
      <div className={s.item}>AVA</div>
      <MyPosts />
    </nav>
  );
};

export default Profile;
