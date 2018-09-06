export default {
    Two: (React, Component) => {
        return class Two extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    common: null
                };
            }
            componentDidMount() {
                import('./commons/common-dynamic.js').then(CommonModule => {
                    const Common = CommonModule.default.Common(React, Component);
                    this.setState({ common: <Common title={'Two dynamic'} /> });
                });
            }
            render() {
                return <React.Fragment>{this.state.common}</React.Fragment>;
            }
        };
    }
};
