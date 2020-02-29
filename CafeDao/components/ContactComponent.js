import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'

class Contact extends Component {

    static navigationOptions  = {
        title: "Contact Us"
    }

    render () {
        return (
            <ScrollView>
                <Card title="Our Information" wrapperStyle={{ margin: 20, marginBottom: 10}}>
                    <Text>2304 W Hefner rd</Text>
                    <Text>California, CA 98001 </Text>
                    <Text style= {{ marginBottom: 10}}>U.S.A. </Text>
                    <Text>Phone: 1-206-555-1234 </Text>
                    <Text>Email: Admin@CafeDao.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;