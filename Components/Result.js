//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import WebView from './WebView'

// create a component
class Result extends Component {
  static navigationOptions = {
    headerTitle: 'Result',
    headerRight: (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 7
        }}
        onPress={() => Linking.openURL('http://www.anthem.com')}
      >
        <Text style={{
          color: 'blue',
          fontSize: 17
        }}>Anthem ></Text>
      </TouchableOpacity>
    ),
  };
  render() {
    let data = JSON.stringify(this.props.navigation.getParam('data', 'NO-DATA'));
    return (
      <View style={styles.container}>
        <Text>Results for "{data}"</Text>
        {/* {data[1].map((link)=>{
          <Text>{link}</Text>
        })} */}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

//make this component available to the app
export default Result;
