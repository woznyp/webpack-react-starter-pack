import './index.scss';

/** STATIC LOADING - BEGIN */

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Test from './components/test-static.jsx';
// ReactDOM.render(<Test />, document.querySelector('#app'));

/** STATIC LOADING - END */

/** DYNAMIC LOADING - BEGIN */

// import('react').then(React => {
//   const Component = React.default.Component;

//   import('react-dom').then(ReactDOM => {
//     import('./components/test-dynamic.jsx').then(TestModule => {
//       const Test = TestModule.default.Test(React, Component);
//       ReactDOM.default.render(<Test />, document.querySelector('#app'));
//     });
//   });
// });

/** DYNAMIC LOADING - END */
