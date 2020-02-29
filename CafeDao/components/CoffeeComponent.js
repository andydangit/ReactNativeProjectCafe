import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return { 
        campsites: state.campsites,
    };
};


class Coffeees extends Component {

    static navigationOptions = {
        title: 'Coffeees'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderCoffeeesItem = ({item}) => {
            return (
                <Tile
                    featured
                    onPress={() => navigate('CoffeeInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderCoffeeesItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Coffeees);