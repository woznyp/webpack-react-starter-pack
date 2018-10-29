export default {
  Test: (React, Component) => {
    return class Test extends Component {
      constructor(props) {
        super(props);
        this.state = {
          component: null,
        };
      }
      componentDidMount() {
        import('./one-dynamic.jsx').then(OneModule => {
          const One = OneModule.default.One(React, Component);
          this.setState({ component: <One /> }, () => {
            setTimeout(() => {
              import('./two-dynamic.jsx').then(TwoModule => {
                const Two = TwoModule.default.Two(React, Component);
                this.setState({ component: <Two /> });
              });
            }, 2000);
          });
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
    };
  },
};
