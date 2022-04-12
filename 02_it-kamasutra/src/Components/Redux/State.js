const ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
  SEND_MESSAGE = 'SEND-MESSAGE';

export let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hello! This is my second post!',
          url: 'https://oboi.ws/filters/vibrance_19_7314_oboi_krasivaja_buhta_240x320.jpg',
        },
        {
          id: 2,
          message: "Hi. It's a first post",
          url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
        },
        {
          id: 3,
          message: "Hi. It's a third post",
          url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
        },
      ],
      newPostText: 'React/Redux lessons',
    },
    dialogsPage: {
      dialogsList: [
        {
          id: 1,
          name: 'Alex',
          userpic:
            'https://static.tildacdn.com/tild6361-3034-4333-b833-353964363837/pngwingcom_2.png',
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
      ],
      messagesData: [
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
      ],
      newMessageText: 'New text...',
    },
  },
  _callSubscriber(state) {
    console.log('State changed!', state);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: Math.floor(Math.random() * 1000),
        message: this.getState().profilePage.newPostText,
        url: 'https://img.uslugio.com/img3/5d/a6/5da640b6a76a752a539103aa7d53e8ec.jpg',
      };
      this._state.profilePage.posts.unshift(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = '';

      console.log(this._state.profilePage.posts);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.messageBody;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let messageBody = this._state.dialogsPage.newMessageText;

      const newMessage = {
        id: Math.floor(Math.random() * 1000),
        messageText: [messageBody],
      };
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.messagesData.push(newMessage);
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (messageBody) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageBody: messageBody,
});
