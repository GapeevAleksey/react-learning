import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Messages/Messages';

const dialogsList = [
  {
    id: 1,
    name: 'Alex',
    userpic: 'https://static.tildacdn.com/tild6361-3034-4333-b833-353964363837/pngwingcom_2.png',
  },
  {
    id: 2,
    name: 'Kate',
    userpic:
      'https://www.static-contents.youth4work.com/y4w/Images/Users/1636020.png?v=20190125141457',
  },
  {
    id: 3,
    name: 'Poly',
    userpic:
      'https://w7.pngwing.com/pngs/915/966/png-transparent-computer-icons-female-woman-avatar-person-hand-people-computer.png',
  },
  {
    id: 4,
    name: 'Mammy',
    userpic:
      'https://w7.pngwing.com/pngs/915/966/png-transparent-computer-icons-female-woman-avatar-person-hand-people-computer.png',
  },
];
const messagesData = [
  {
    id: 1,
    messageText: ['static', 'tildacdn.com', 'pngwingcom'],
  },
  {
    id: 2,
    messageText: ['How are you?!', 'transparent', 'pngs', 'person'],
  },
  {
    id: 3,
    messageText: ['Ok', 'Hello', 'JavaScript'],
  },
  {
    id: 4,
    messageText: ['computer', 'hand-people', 'className'],
  },
];

const Dialogs = (props) => {
  const dialogsElements = dialogsList.map((item) => {
    return <Dialog id={item.id} name={item.name} userpic={item.userpic} />;
  });
  const messagesElements = messagesData.map((item) => {
    return <Message textArray={item.messageText} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
