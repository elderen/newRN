//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import axios from 'axios'

// create a component
class Result extends Component {
  static navigationOptions = {
    headerTitle: 'Results',
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
    let data = this.props.navigation.getParam('data', 'NO-DATA');
    // alert(data)
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* <Text style={{fontSize: 16}}>{data}</Text> */}
          {data.map((unit) => {
            if (unit !== data[data.length - 1]) {
              return <Text style={{ alignSelf: 'flex-start', margin: 5 }} key={unit}>{unit}</Text>
            } else {
              return unit.map((link) => {
                return <Text
                  style={{
                    color: 'darkblue',
                    alignSelf: 'flex-start',
                    margin: 6
                  }}
                  key={link}
                  onPress={() => { Linking.openURL(link) }}
                >{link}</Text>
              })
            }
          })}
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  }
});

//make this component available to the app
export default Result;
