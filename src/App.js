import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas'

export default class App extends React.Component {

  render() {

    return (
      <Canvas />
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
}

