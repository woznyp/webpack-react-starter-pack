export default {
  One: (React, Component) => {
    return class One extends Component {
      constructor(props) {
        super(props);
        this.state = {
          common: null,
        };
      }
      componentDidMount() {
        import('./commons/common-dynamic.jsx').then(CommonModule => {
          const Common = CommonModule.default.Common(React, Component);
          this.setState({ common: <Common title={'One dynamic'} /> });
        });
      }
      render() {
        return <React.Fragment>{this.state.common}</React.Fragment>;
      }
    };
  },
};
