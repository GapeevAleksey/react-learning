import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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

const Message = (props) => {
  console.log(props);
  return (
    <div className={s.messagesItems}>
      {props.textArray.map((item, index) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsList.map((item, index) => {
          return <Dialog {...dialogsList[index]} />;
        })}
      </div>

      <div className={s.messages}>
        {dialogsList.map((item, index) => {
          return <Message textArray={messagesData[index].messageText} />;
        })}

        {/* <BrowserRouter>
          <Routes>
            <Route path="/dialogs/1" element="1" />
            <Route path="/dialogs/2" element="2" />
            <Route path="/dialogs/3" element="3" />
          </Routes>
        </BrowserRouter> */}
      </div>
    </div>
  );
};

export default Dialogs;
