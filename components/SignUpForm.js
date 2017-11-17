import React, { Component } from 'react'
import axios from 'axios'
import { View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

const ROOT_URL = 'https://us-central1-onetimepassj.cloudfunctions.net'

class SignUpForm extends Component {
  state = { phone: '' }

  handleSubmit = async () => {
    const { phone } = this.state

    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone })
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone })
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
        <Button onPress={this.handleSubmit} title='Sign Up' />
      </View>
    )
  }
}

export default SignUpForm
