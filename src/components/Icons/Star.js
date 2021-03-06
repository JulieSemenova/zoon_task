import React from 'react';
import PropTypes from 'prop-types';

const Star = props => (
  <svg viewBox="0 0 16 15">
    <path
      fill={props.color}
      fillRule="evenodd"
      className="icon_fill"
      d="M15.21 5.059l-4.124-.446a.702.702 0 0 1-.555-.396L8.83.52c-.32-.693-1.313-.693-1.633 0L5.48 4.217a.693.693 0 0 1-.556.396L.802 5.06a.869.869 0 0 0-.505 1.519l3.063 2.74c.185.165.27.412.219.643l-.842 3.978c-.151.743.657 1.32 1.33.941l3.602-2.014a.73.73 0 0 1 .69 0l3.602 2.014c.674.38 1.482-.198 1.33-.94L12.45 9.96a.63.63 0 0 1 .202-.643l3.064-2.74c.555-.496.252-1.436-.505-1.519z"
    />
  </svg>
);
Star.default = {};

Star.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Star;
