import React from 'react'
import firebase from 'firebase'
import { View, StyleSheet } from 'react-native'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
export default class App extends React.Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyAC2kN5JsuRLtyOBa9TBVv3XjsPjdpiWSg',
      authDomain: 'onetimepassj.firebaseapp.com',
      databaseURL: 'https://onetimepassj.firebaseio.com',
      projectId: 'onetimepassj',
      storageBucket: 'onetimepassj.appspot.com',
      messagingSenderId: '912098132946'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
