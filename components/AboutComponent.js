import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class AboutComponent extends Component {

    static navigationOptions = {
        title: 'About Us'
    };
    
    render(){
        return (
             <View>
                <Text>About</Text>
            </View>
        )
    }
}

export default AboutComponent

const styles = StyleSheet.create({})
