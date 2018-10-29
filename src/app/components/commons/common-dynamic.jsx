export default {
  Common: React => props => {
    const { title } = props;
    return (
      <h2>
        Common!
        {title}
      </h2>
    );
  },
};
