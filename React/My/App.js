import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class App extends Component {
state = {
email: '',
password: '',
   }
   handleEmail = (text) => {
   this.setState({ email: text })
   }
   handlePassword = (text) => {
   this.setState({ password: text })
   }
   login = (email, pass) => {
   alert('email: ' + email + ' password: ' + pass)
   }
   render() {
   return (
   <View style = {styles.container}>
   <TextInput style = {styles.input}
    placeholder = "Email"
   placeholderTextColor = "#9a73ef"
   onChangeText = {this.handleEmail}/>
            
   <TextInput style = {styles.input}
      placeholder = "Password"
      placeholderTextColor = "#9a73ef"
      onChangeText = {this.handlePassword}/>
            
   <TouchableOpacity
      style = {styles.submitButton}
      onPress = {
        () => this.login(this.state.email, this.state.password)
       }>
       <Text style = {styles.submitButtonText}> Submit </Text>
       </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
container: {
paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 2
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})