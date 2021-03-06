import React from 'react';
import PropTypes from 'prop-types';

const Loading = props => (
  <svg viewBox="0 0 12 17">
    <path
      fill={props.color}
      className="icon_fill"
      fillRule="nonzero"
      d="M6 3.75V6l3-3-3-3v2.25c-3.315 0-6 2.685-6 6 0 1.177.345 2.273.93 3.195l1.095-1.095a4.403 4.403 0 0 1-.525-2.1c0-2.482 2.018-4.5 4.5-4.5zm5.07 1.305L9.975 6.15c.33.63.525 1.342.525 2.1 0 2.483-2.017 4.5-4.5 4.5V10.5l-3 3 3 3v-2.25c3.315 0 6-2.685 6-6a5.948 5.948 0 0 0-.93-3.195z"
    />
  </svg>
);
Loading.default = {};

Loading.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Loading;
