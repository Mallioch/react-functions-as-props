import React from 'react';


class ColorItem extends React.Component {

  render() {

    const style = {
      backgroundColor: this.props.color,
      width: '50px',
      height: '50px'
    };

    return (
      <div style={style} onClick={this.props.chooseColor}>
      </div>
    )
  }
}

class ColorChooser extends React.Component {

  constructor() {
    super();

    this.state = {
      colors: ['red', 'blue', 'yellow', 'green', '#1745ab'],
      chosenColor: '',
      textColor: 'Choose from the bottom to set the text'
    }
  }

  colorChosen(color) {
    console.log('changing to color: ', color);
    this.setState({
      chosenColor: color
    })
  }

  changeText(color) {
    this.setState({
      textColor: color
    })
  }

  render() {
    return (
      <div className="color-chooser">

        <div style={ { backgroundColor: this.state.chosenColor, height: '50px' } }>{this.state.textColor}</div>

        {this.state.colors.map((color, index) => {
          return <ColorItem key={index} color={color} chooseColor={() => this.colorChosen(color) } />
        })}

        <h2>Text Changing Below</h2>

        {this.state.colors.map((color, index) => {
          return <ColorItem key={index} color={color} chooseColor={() => this.changeText(color)} />
        })}

      </div>
    );
  }

}

export default ColorChooser;
