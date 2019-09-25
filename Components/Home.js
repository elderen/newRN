import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios'

// create a component
export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none'
    }
  }
  state = {
    input: ''
  }
  constructor(props) {
    super(props)
    // this.buttonOne = this.buttonOne.bind(this)
  }

  buttonOne = () => {
    // alert('button 1')
    axios.post('http://localhost:3000/search', { input: this.state.input })
      .then((response) => {
        // alert(response.data)
        this.props.navigation.navigate('Result', { data: response.data })
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`https://www.mediawiki.org/w/api.php?action=opensearch&search=${this.state.input}`}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'placeholder'}
            onChangeText={(text) => {
              this.setState({
                input: text
              })
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.buttonOne}
        >
          <Text style={styles.button}>Search</Text>
        </TouchableOpacity>
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
  },
  inputContainer: {
    borderColor: 'black',
    color: 'black',
    height: 30,
    width: '70%',
    borderWidth: 2,
    justifyContent: 'center'

  },
  textInput: {
    paddingLeft: 7
  },
  buttonContainer: {
    borderColor: 'black',
    backgroundColor: 'blue',
    height: 30,
    width: '30%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7
  },
  button: {
    color: 'white'
  }
});
