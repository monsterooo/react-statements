import React from 'react';
import PropTypes from 'prop-types';
import Default from './Default';

const If = ({ when, children }) => {
  let defaultComponent = null;
  let ifComponent = null;

  React.Children.forEach(children, (child) => {
    if (child.type === Default) {
      defaultComponent = child;
    } else {
      ifComponent = child;
    }
  });

  if (when) {
    return ifComponent;
  } else if (defaultComponent) {
    return defaultComponent;
  }
  return null;
};
If.propTypes = {
  when: PropTypes.any.isRequired
};
export default If;
