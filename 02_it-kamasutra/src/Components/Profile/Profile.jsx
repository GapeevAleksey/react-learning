import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import { NavLink } from 'react-router-dom';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
export default Profile;
