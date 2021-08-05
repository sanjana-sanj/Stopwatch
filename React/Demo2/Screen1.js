import React,{component}  from 'react';
import {View,Text,Button } from 'react-native';

export default class Screen1 extends component
{
    render()
    {
        return(
            <View>
                <Text style={{textAlign: 'centre', fontsize:30}}>Screen1</Text>
                <Button title="show"></Button>
            </View>
        );
    }
}