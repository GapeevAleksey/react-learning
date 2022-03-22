import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
export default Profile;
