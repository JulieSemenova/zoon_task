import React from 'react';
import PropTypes from 'prop-types';

const Reload = props => (
  <svg viewBox="0 0 38 38">
    <path
      fill={props.color}
      fillRule="evenodd"
      className="icon_fill"
      d="M32.415 5.581C28.97 2.137 24.24 0 18.988 0 8.484 0 0 8.503 0 19c0 10.498 8.484 19 18.988 19 8.864 0 16.255-6.056 18.37-14.25h-4.943c-1.948 5.534-7.224 9.5-13.427 9.5C11.122 33.25 4.73 26.861 4.73 19S11.122 4.75 18.99 4.75c3.944 0 7.461 1.639 10.028 4.227l-7.652 7.648H38V0l-5.585 5.581z"
    />
  </svg>
);
Reload.default = {};

Reload.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Reload;
