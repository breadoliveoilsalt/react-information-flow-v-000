import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" style={{backgroundColor: this.props.childColor, color: this.props.childColor}}>
        <Tier3
          grandchildColor={this.props.grandchildColor} handleGrandchildClick={this.props.handleGrandchildClick}/>
        <Tier3
          grandchildColor={this.props.grandchildColor} handleGrandchildClick={this.props.handleGrandchildClick}/>
      </div>
    )
  }
}
