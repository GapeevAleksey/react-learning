import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import { NavLink } from 'react-router-dom';

const Profile = (props) => {
  return (
    <div className="profile">
      <div>
        <img src="https://i.pinimg.com/736x/b1/93/8e/b1938e033f60606863defdc3d631d4f8.jpg" />
      </div>
      <div className={s.item}>AVA</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
