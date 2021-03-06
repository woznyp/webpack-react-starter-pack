export default {
  Two: (React, Component) =>
    class Two extends Component {
      constructor(props) {
        super(props);
        this.state = {
          common: null,
        };
      }

      componentDidMount() {
        import('./commons/common-dynamic.jsx').then(CommonModule => {
          const Common = CommonModule.default.Common(React, Component);
          this.setState({ common: <Common title="Two dynamic" /> });
        });
      }

      render() {
        const { common } = this.state;
        return <React.Fragment>{common}</React.Fragment>;
      }
    },
};
