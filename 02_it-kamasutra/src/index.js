import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderDOM } from './render';
import { addPost, state, updateNewPostText } from './Components/Redux/state';
window.state = state;
rerenderDOM(state, addPost, updateNewPostText);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
