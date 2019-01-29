import * as React from "react";

interface ComponentState {}
interface ComponentProps {
  children?: any;
  env: any;
}

class Layout extends React.Component<ComponentProps, ComponentState> {
  public render() {
    const {
      env,
      children
    } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Layout;
