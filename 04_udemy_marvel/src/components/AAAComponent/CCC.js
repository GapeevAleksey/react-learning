import { Component } from 'react';

class CCC extends Component {
  state = {
    users: [],
  };
  //   getData = () => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((result) => result.json())
  //       .then((res) => this.setState({ users: res }));
  //   };

  getData = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await data.json();
      this.setState({ users: result });
      console.log(data);
      console.log(result);
    } catch (error) {
      console.log('Error >> ', error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ul>
        !!!
        {this.state.users.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );
  }
}

export default CCC;
