import React from "react";
import PropTypes from "prop-types";
// import urlPropType from 'url-prop-type'

function Post(props){
  return (
    <React.Fragment>
      <h3><em>{props.name}</em></h3>
      <p>{props.message} - {props.link}</p>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  link: PropTypes.string,
};
export default Post;
