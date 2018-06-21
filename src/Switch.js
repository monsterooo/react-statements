import React from 'react';
import PropTypes from 'prop-types';
import Case from './Case';
import Default from './Default';

const Switch = ({ value, children }) => {
  let defaultComponent = null;
  let caseComponent = null;
  React.Children.forEach(children, (child) => {
    if (child.type === Default) {
      defaultComponent = child;
    } else if (child.type === Case && value === child.props.when) {
      caseComponent = child;
    }
  });
  if (caseComponent) {
    return caseComponent;
  } else if (defaultComponent) {
    return defaultComponent;
  }
  return null;
};
Switch.propTypes = {
  value: PropTypes.any.isRequired
};
export default Switch;
