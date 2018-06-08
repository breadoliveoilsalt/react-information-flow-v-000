from Tier 1
//
// constructor(props) {
//   super(props)
//   const initialColor = getRandomColor()
//   this.state = {
//     color: initialColor,
//     childColor: getReducedColor(initialColor)
//   }
// }

<div onClick={() => {this.setState({color: "#000"})}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>


onClick={() => {this.setState({color: "#000"})}}

From tier2:

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  from Tier3:

  <div className="tier3" onClick={props.handleChildClick} style={{backgroundColor: props.color, color: props.color}}></div>

  onClick={props.handleChildClick}
