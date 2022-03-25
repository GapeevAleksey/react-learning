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
    },
  },
  _callSubscriber() {
    console.log('State changed!');
  },
  getState() {
    debugger;
    return this._state;
  },
  addPost() {
    debugger;
    let newPost = {
      id: 4,
      message: this.getState().profilePage.newPostText,
      url: 'https://img.uslugio.com/img3/5d/a6/5da640b6a76a752a539103aa7d53e8ec.jpg',
    };
    this._state.profilePage.posts.unshift(newPost);
    this._callSubscriber();
    this._state.profilePage.newPostText = '';
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

// export const state = {
//   profilePage: {
//     posts: [
//       {
//         id: 1,
//         message: 'Hello! This is my second post!',
//         url: 'https://oboi.ws/filters/vibrance_19_7314_oboi_krasivaja_buhta_240x320.jpg',
//       },
//       {
//         id: 2,
//         message: "Hi. It's a first post",
//         url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
//       },
//       {
//         id: 3,
//         message: "Hi. It's a third post",
//         url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
//       },
//     ],
//     newPostText: 'React/Redux lessons',
//   },
//   dialogsPage: {
//     dialogsList: [
//       {
//         id: 1,
//         name: 'Alex',
//         userpic:
//           'https://static.tildacdn.com/tild6361-3034-4333-b833-353964363837/pngwingcom_2.png',
//       },
//       {
//         id: 2,
//         name: 'Kate',
//         userpic:
//           'https://www.static-contents.youth4work.com/y4w/Images/Users/1636020.png?v=20190125141457',
//       },
//       {
//         id: 3,
//         name: 'Poly',
//         userpic:
//           'https://w7.pngwing.com/pngs/915/966/png-transparent-computer-icons-female-woman-avatar-person-hand-people-computer.png',
//       },
//       {
//         id: 4,
//         name: 'Mammy',
//         userpic:
//           'https://w7.pngwing.com/pngs/915/966/png-transparent-computer-icons-female-woman-avatar-person-hand-people-computer.png',
//       },
//     ],
//     messagesData: [
//       {
//         id: 1,
//         messageText: ['static', 'tildacdn.com', 'pngwingcom'],
//       },
//       {
//         id: 2,
//         messageText: ['How are you?!', 'transparent', 'pngs', 'person'],
//       },
//       {
//         id: 3,
//         messageText: ['Ok', 'Hello', 'JavaScript'],
//       },
//       {
//         id: 4,
//         messageText: ['computer', 'hand-people', 'className'],
//       },
//     ],
//   },
// };
// export const addPost = () => {
//   let newPost = {
//     id: 4,
//     message: store.this.getState().profilePage.newPostText,
//     url: 'https://img.uslugio.com/img3/5d/a6/5da640b6a76a752a539103aa7d53e8ec.jpg',
//   };
//   store.this.getState().profilePage.posts.unshift(newPost);
//   _callSubscriber();
//   store.this.getState().profilePage.newPostText = '';
// };
// export const updateNewPostText = (newText) => {
//   store.this.getState().profilePage.newPostText = newText;
//   _callSubscriber();
// };
// export const subscribe = (observer) => {
//   _callSubscriber = observer;
// };
