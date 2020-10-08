import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => <div className="grid">{children}</div>;

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Content;
