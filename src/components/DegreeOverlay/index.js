import React from 'react'
import PropTypes from 'prop-types'
import Iframe from "react-iframe";
import * as Icon from 'react-feather';

function DegreeOverlay({ removeOverlay, data }) {
  let cName = 'overlay-close';
  if(data['toggle_the_moving_of_the_x_button_to_the_left']){
    cName += ' toggle_x';
  }
  return (
    <div className="overlay">

    <Icon.X className="overlay-close" onClick={(e) => removeOverlay()}/>
     <div id="iframe-wrapper" className="iframe-wrapper">
      <Iframe
        url={data.three_sixty_degree_url.url}
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="absolute"
        
      />
      </div>
    </div>
  )
}

DegreeOverlay.defaultProps = {
  modelUrl: '',
}

DegreeOverlay.propTypes = {
  removeOverlay: PropTypes.func,
  modelUrl: PropTypes.string
}
export default DegreeOverlay
