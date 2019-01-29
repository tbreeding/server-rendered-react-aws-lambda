import * as React from 'react';
import logo from './react.svg';

import './Home.css';

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>React from a node lambda</h2>
        </div>
        <ul className="Home-resources">
          <li>
            <a href="/search">click here to test routing...</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
