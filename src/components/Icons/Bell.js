import React from 'react';
import PropTypes from 'prop-types';

const Bell = props => (
  <svg viewBox="0 0 12 15">
    <path
      className="icon_fill"
      fill={props.color}
      fillRule="nonzero"
      d="M4.673 12.958c0 .691.615 1.25 1.375 1.25s1.375-.559 1.375-1.25h-2.75zM6.05 3.087c1.863 0 3.375 1.493 3.375 3.333v4.667h-6.75V6.42c0-1.84 1.512-3.333 3.375-3.333zM6 0c-.553 0-1 .453-1 1.014v.79c-2.093.46-3.667 2.351-3.667 4.615v4.054L0 11.824v.676h12v-.676l-1.333-1.351V6.419c0-2.264-1.574-4.155-3.667-4.615v-.79C7 .453 6.553 0 6 0z"
    />
  </svg>
);
Bell.default = {};

Bell.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Bell;
