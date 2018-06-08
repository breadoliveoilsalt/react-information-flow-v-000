import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    // const initialColor = getRandomColor()
    this.state = {
      color: getRandomColor(),
      childColor: getRandomColor(),
      grandchildColor: getRandomColor()
    }
  }

  handleChildClick = (event) => {
    event.stopPropagation()
    console.log("Child Click!!")
  }

  handleGrandchildClick = () => {
    const newColor = getRandomColor()
    this.setState({
      grandchildColor: newColor
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2
          childColor={this.state.childColor}
          grandchildColor={this.state.grandchildColor}
          handleChildClick={this.handleChildClick}
          handleGrandchildClick={this.handleGrandchildClick}/>
        <Tier2
          childColor={this.state.childColor}
          grandchildColor={this.state.grandchildColor}
          handleChildClick={this.handleChildClick}
          handleGrandchildClick={this.handleGrandchildClick} />
      </div>
    )
  }
}
