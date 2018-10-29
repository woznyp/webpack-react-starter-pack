import React, { Component } from 'react';
import Common from './commons/common-static.jsx';

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <Common title={'One static'} />
      </React.Fragment>
    );
  }
}
