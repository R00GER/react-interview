import React from 'react';
import PropTypes from 'prop-types';
import { BsCardChecklist } from 'react-icons/bs';

const Header = ({ headerText }) => {
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8vh',
    color: '#fff',
    backgroundImage: 'linear-gradient(to right top, #663399, #7949a9, #8c5fb9, #9f75c9, #b28cd9)',
  };

  return (
    <div className="header" style={headerStyles}>
      <BsCardChecklist
        className="header-logo header-grid-item"
        fontSize="1.6rem"
        style={{ paddingTop: '2.5px' }}
      />
      <div style={{ fontSize: '1.5rem', paddingLeft: '5px' }}>{headerText}</div>
    </div>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
