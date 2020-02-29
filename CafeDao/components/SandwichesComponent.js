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


class Sandwiches extends Component {

    static navigationOptions = {
        title: 'Sandwiches'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderSandwichesItem = ({item}) => {
            return (
                <Tile
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderSandwichesItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Sandwiches);