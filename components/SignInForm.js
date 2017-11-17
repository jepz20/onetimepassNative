import React, { Component } from 'react'
import axios from 'axios'
import { View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import firebase from 'firebase'
const ROOT_URL = 'https://us-central1-onetimepassj.cloudfunctions.net'

class SignInForm extends Component {
  state = { phone: '' }

  handleSubmit = async () => {
    const { phone, code } = this.state

    try {
      let { data } = await axios.post(
        `${ROOT_URL}/verifyOneTimePassword`,
        { phone, code }
      )
      firebase.auth().signInWithCustomToken(data.token)
    } catch (err) {
      console.log(err, err.response)
    }
  }

  render () {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title='Sign In' />
      </View>
    )
  }
}

export default SignInForm
