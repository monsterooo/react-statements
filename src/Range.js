import React from 'react';
import PropTypes from 'prop-types';
import { isObject } from './utils';

const isArray = Array.isArray;
const Range = ({ type, value, whenKey, when, children }) => {
  let condition = false;

  if (process.env.NODE_ENV === "development") {
    if (!isObject(value) && !isArray(value)) {
      throw Error('Range Component value Is not a Array or Object');
    }
  }
  switch(type) {
    case 'in':
      if (isArray(value) && value.includes(when)) {
        condition = true;
      } else if (isObject(value)) {
        if (whenKey && value.hasOwnProperty(when)) {
          condition = true;
        } else if (!whenKey && Object.values(value).includes(when)) {
          condition = true;
        }
      }
      break;
    case 'notin':
      if (isArray(value) && !value.includes(when)) {
        condition = true;
      } else if (isObject(value)) {
        if (whenKey && !value.hasOwnProperty(when)) {
          condition = true;
        } else if (!whenKey && !Object.values(value).includes(when)) {
          condition = true;
        }
      }
      break;
  }
  return condition ? children : null;
}
Range.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  when: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};
export default Range;
