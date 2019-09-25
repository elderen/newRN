import React, { Component } from 'react';
import { Linking } from 'react-native';

export default class WebViewComponent extends Component {
  render() {
    return (
      <Text>{this.props.word}</Text>
    );
  }
}