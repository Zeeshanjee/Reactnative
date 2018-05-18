import React, {components} from 'react';
import{view,Text}from 'react-native';
import axios from 'axios';

class AlbumList extends  components{
    componentWillMount(){
        axios.get('https//:rallycoding.herokuapp.com/api/music_albums')
    }

    render() {
        return (
            <View>
                <Text>AlbumList!Text</Text>
            </View>
        );
    }
}
export default AlbumList;