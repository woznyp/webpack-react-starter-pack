export default {
  Common: (React, Component) =>
    class Common extends Component {
      render() {
        return <h2>Common! {this.props.title}</h2>;
      }
    },
};
