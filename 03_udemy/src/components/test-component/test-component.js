import { Component } from 'react';
import './test-component.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      premia: 1000,
      position: '',
    };
  }
  get stateInfo() {
    return JSON.stringify(this.state);
  }
  premiaUp = () => {
    this.setState({
      premia: this.state.premia + 1000,
    });
  };
  commitInput = (e) => {
    this.setState({ position: e.target.value });
  };
  render() {
    const { name, salary } = this.props.data[1];
    const { position, premia } = this.state;
    console.log(this.stateInfo);
    return (
      <div className="test-component">
        <button onClick={this.premiaUp}>+++</button>
        <h1>
          Вас зовут {name}. Ваша зарплата {salary}. Премия: {premia}. Должность {position}
        </h1>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInput} />
        </form>
      </div>
    );
  }
}

export default WhoAmI;
