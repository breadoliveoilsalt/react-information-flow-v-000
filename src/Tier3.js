import React from 'react'
//test

const Tier3 = (props) => (
  // this component does not need to change (but feel free to change however you like!)
  <div className="tier3" onClick={props.handleGrandchildClick} style={{backgroundColor: props.grandchildColor, color: props.grandchildColor}}></div>
)

export default Tier3
