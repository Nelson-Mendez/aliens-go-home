import React from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utilities/formulas'
import Canvas from './components/Canvas'

export default class App extends React.Component {


  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {

    return (
      <Canvas angle={this.props.angle} trackMouse={event => this.trackMouse(event)}/>
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
}

