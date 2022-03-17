import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Messages/Messages';

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogsList.map((item) => {
    return <Dialog id={item.id} name={item.name} userpic={item.userpic} key={item.id} />;
  });
  const messagesElements = props.state.messagesData.map((item) => {
    return <Message textArray={item.messageText} key={item.id} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
