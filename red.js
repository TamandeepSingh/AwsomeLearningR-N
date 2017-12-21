import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
//import Blue from './blue';

export default class Blue extends Component<{}>{
  render(){
    return(
      <View style= {styles.container} >
        <Text style = {styles.welcome} onPress = {() => Actions.bluec()} >
          This pages is red!
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
    backgroundColor: '#FF0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
