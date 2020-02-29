import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return { 
        partners: state.partners
    };
};


function Mission({}) {

        return (
            <Card title="Our Mission" >
                <Text>
                Fresh starts every morning before a single sandwich is toasted or sald is crafted we are preparing fresh veggies meats and chees and sending a fresh batch of cookies through the oven-because we know fresh food makes you smile
                </Text>
            </Card>
        );
    };


class About extends Component {

   
    static navigationOptions  = {
        title: "About Us"
    }


    render () {

        const renderPartners = ({ item }) => {
            return (
                <ListItem 
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };


        return (
            <ScrollView>
                <Mission />
                <Card title="Hours">
                    <FlatList
                        data={this.props.partners.partners}
                        renderItem={renderPartners}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card> 
            </ScrollView>
        );
    }
}


export default connect(mapStateToProps)(About);