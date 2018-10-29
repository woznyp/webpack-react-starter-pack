import React from 'react';

export default props => {
  const { title } = props;
  return (
    <h2>
      Common!
      {title}
    </h2>
  );
};
