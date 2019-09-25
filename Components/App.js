import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import Home from './Home'
import Result from './Result'

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Result: {
      screen: Result
    }
  }
)

export default App = createAppContainer(StackNavigator);