import React,{component}  from 'react';
import {View,Text,Button, TextInput } from 'react-native';

export default class Screen2 extends component
{
    render()
    {
        return(
            <View>
                <TextInput
                placeholder="Enter user Name"
                style={{borderBottomWidth:1, borderBottomColor: '#ff0000', marginBottom:20}}
                />
                <Button
                title="Login"
                />
            </View>
        );
    }
}