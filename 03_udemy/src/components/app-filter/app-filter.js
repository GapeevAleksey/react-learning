import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSortBy: 'onRise',
    };
    this.buttonsData = [
      { name: 'all', label: 'Все сотрудники' },
      { name: 'onRise', label: 'На повышение' },
      { name: 'more1000$', label: 'З/П больше 1000$' },
    ];
  }

  render() {
    return this.buttonsData.map((button) => {
      return (
        <div className="btn-group">
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={() => {
              this.props.onUpdateSort(button.name);
            }}
          >
            {button.label}
          </button>
        </div>
      );
    });
  }
}
export default AppFilter;
