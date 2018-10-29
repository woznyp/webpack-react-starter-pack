import React, { Component } from 'react';
import One from './one-static.jsx';
import Two from './two-static.jsx';

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
    return (
      <React.Fragment>
        <h1>Test!</h1>
        {this.state.component}
      </React.Fragment>
    );
  }
}
