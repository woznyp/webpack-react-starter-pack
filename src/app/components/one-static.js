import React, { Component } from 'react';
import Common from './commons/common-static.js';

export default class One extends Component {
    render() {
        return (
            <React.Fragment>
                <Common title={'One static'}/>
            </React.Fragment>
        );
    }
}
