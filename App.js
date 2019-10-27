

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

var t = require('tcomb-form-native');

import Login from "./app/components/Login";
import ForgetPassword from "./app/components/ForgetPassword";
import Register from "./app/components/Register";

import { StackNavigator } from "react-navigation";



class Home extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});