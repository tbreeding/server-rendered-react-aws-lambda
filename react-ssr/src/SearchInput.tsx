import * as React from 'react';
import './Home.css';
import logo from './react.svg';

interface CompoentState {
  color: string;
}

class SearchInput extends React.Component<{}, CompoentState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      color: 'grey'
    };
  }

  public changeColor = (): void => {
    this.setState({
      color: 'red'
    }, () => {
      alert('testing bundle.js is being serverd - the button should turn red');
    });
  }

  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Test component</h2>
          <input type="text" />
          <input
            type="submit"
            style={{ backgroundColor: this.state.color }}
            value="Submit"
            onClick={this.changeColor}
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
