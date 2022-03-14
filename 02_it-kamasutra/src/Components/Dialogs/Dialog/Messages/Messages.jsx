import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={s.message}>
      <div>{props.messageText}</div>
    </div>
  );
};

export default Messages;
