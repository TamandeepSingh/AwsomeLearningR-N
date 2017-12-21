import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
//import Red from './red';

export default class Blue extends Component<{}>{
  render(){
    return(
      <View style= {styles.container}  >
        <Text style = {styles.welcome} onPress = {() => Actions.redc()} >
          This pages is Blue!
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
