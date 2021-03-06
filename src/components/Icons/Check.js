import React from 'react';
import PropTypes from 'prop-types';

const Check = props => (
  <svg viewBox="0 0 9 10">
    <path
      className="icon_fill"
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      d="M2.814 9.17L8.25 1.816v-.29L2.84 8.902.5 5.894v.277l2.314 3z"
    />
  </svg>
);
Check.default = {};

Check.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Check;
