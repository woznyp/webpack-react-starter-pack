import React, { Component } from 'react';
import One from './one-static';
import Two from './two-static';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }

  componentDidMount() {
    this.setState({ component: <One /> }, () => {
      setTimeout(() => {
        this.setState({ component: <Two /> });
      }, 2000);
    });
  }

  render() {
    const { component } = this.state;
    return (
      <React.Fragment>
        <h1>Test!</h1>
        {component}
      </React.Fragment>
    );
  }
}
