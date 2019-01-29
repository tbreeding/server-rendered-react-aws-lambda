import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './SearchInput';
import Home from './Home';
import Layout from './Layout';

interface ComponentState {}
interface ComponentProps {
    env?: any;
}

class App extends React.Component<ComponentProps, ComponentState> {
  public render() {
    const { env } = this.props;
    return (
      <Layout
        env={env}
      >
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/search" component={Search} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
