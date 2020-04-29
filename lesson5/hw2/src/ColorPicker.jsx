import React, { Component } from 'react';
import "./picker.scss";

class ColorPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  setTitle = (colorName) => {
    this.setState({
      title: colorName,
    });
  }
  
  reset = () => {
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">
          {this.state.title}
        </div>
        <div>
          <button 
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setTitle('Coral')} 
            onMouseOut={this.reset}
          />
          <button 
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setTitle('Aqua')} 
            onMouseOut={this.reset}
          />
          <button 
          className="picker__button picker__button_bisque"
          onMouseOver={() => this.setTitle('Bisque')} 
          onMouseOut={this.reset}
          />
        </div>
      </div>
    );
  };
}

export default ColorPicker;