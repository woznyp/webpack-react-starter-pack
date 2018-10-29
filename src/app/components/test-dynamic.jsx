export default {
  Test: (React, Component) =>
    class Test extends Component {
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
        const { component } = this.state;
        return (
          <React.Fragment>
            <h1>Test!</h1>
            {component}
          </React.Fragment>
        );
      }
    },
};
