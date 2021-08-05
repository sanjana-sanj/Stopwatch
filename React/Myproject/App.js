
import React, {Component} from 'react';  
import { Text, View } from 'react-native';  
  
export default class App extends Component {  
state = {  
myState:' A text component, of state data. It will  updated on clicking it.'  
    }  
    updateState = () => this.setState({myState: 'The state is updated'})  
    render() {  
        return (  
        <View>  
        <Text onPress={this.updateState}> {this.state.myState} </Text>  
         </View>  
);  
 }  
}  