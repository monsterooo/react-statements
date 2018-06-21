import PropTypes from 'prop-types';

const If = ({ when, children }) => {
  if (when) {
    return children;
  }
  return null;
};
If.propTypes = {
  when: PropTypes.any.isRequired
};
export default If;
