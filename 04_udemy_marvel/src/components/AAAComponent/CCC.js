import { Component, useState, useEffect } from 'react';

// class CCC extends Component {
//   state = {
//     info: [],
//     posts: [],
//   };
//   //   getDatainfo = () => {
//   //     fetch('https://jsonplaceholder.typicode.com/info')
//   //       .then((result) => result.json())
//   //       .then((res) => this.setState({ info: res }));
//   //   };

//   getDatainfo = async () => {
//     try {
//       const data = await fetch('https://jsonplaceholder.typicode.com/info');
//       const result = await data.json();
//       this.setState({ info: result });
//       console.log(data);
//       console.log(result);
//     } catch (error) {
//       console.log('Error >> ', error);
//     }
//   };

//   componentDidMount() {
//     this.getDatainfo();
//   }

//   render() {
//     return (
//       <>
//         <form>
//           <button>Click</button>
//         </form>
//         <ul>

//           {this.state.info.map((item) => {
//             return <li key={item.id}>{item.name}</li>;
//           })}
//         </ul>
//       </>
//     );
//   }
// }

const CCC = () => {
  const buttons = [
    { id: 1, name: 'users', title: 'Users' },
    { id: 2, name: 'posts', title: 'Posts' },
    { id: 3, name: 'todos', title: 'ToDos' },
    { id: 4, name: 'albums', title: 'Albums' },
  ];
  const [info, setInfo] = useState({ data: [], loaded: false });
  const [whatShow, setWhatShow] = useState('users');
  const getData = (whatLoad) => {
    fetch(`https://jsonplaceholder.typicode.com/${whatLoad}`)
      .then((response) => response.json())
      .then((result) =>
        setInfo((prev) => {
          return { ...prev, data: [...result] };
        })
      );
    console.log(info);
  };
  const changeData = (whatShow) => {
    setWhatShow(whatShow);
  };
  useEffect(() => getData(whatShow), [whatShow]);

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        {buttons.map((button) => {
          return (
            <button
              key={button.id}
              style={{ marginBottom: '10px' }}
              type="button"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                changeData(button.name);
              }}
            >
              {button.title}
            </button>
          );
        })}
      </div>
      <ul className="list-group">
        {info.data.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              {item.name ? item.name : null}
              {item.title ? item.title : null}
              {item.email ? ': ' + item.email : null}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CCC;
