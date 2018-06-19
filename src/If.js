import React from 'react';

const If = ({ when, children }) => {
  if (when) {
    return children;
  }
  return null;
};

export default If;
