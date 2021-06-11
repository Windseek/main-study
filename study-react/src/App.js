import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

Hello.propTypes = {
  name: PropTypes.string
};
Hello.defaultProps = {
  sex: 1
}
export default class App extends React.Component {
  componentDidMount() {
    debugger
    React.createElement(Hello, {toWhat: 'World', name: '222'}, null);
  }
  render() {
    return (
      <div>111</div>
    )
  }
};
