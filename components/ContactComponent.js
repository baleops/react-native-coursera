import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Image} from 'react-native-elements';
import CONTACT from '../shared/contact'

function RenderCont(props) {

    const cont = props.cont;
    
        if (cont != null) {
            return(
                <Card
                featuredTitle="Contact Information"
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {cont.list1}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}


class ContactComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: CONTACT,
        };
    }

    static navigationOptions = {
        title: 'Contact'
    };

    render(){
            return(
                <RenderCont item={this.state.contact[this.props.id]} />
                
        );    
    }
}

export default ContactComponent

const styles = StyleSheet.create({})
