import React, {components} from 'react';
import{view,Text}from 'react-native';
import axios from 'axios';

class AlbumList extends  components
    state ={ albums:[]
   };
    componentWillMount(){
        axios.get('https//:rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums:response.data}));
    }

    render()
   {
    console.log(this.state);
    return (
        <View>
            <Text>AlbumList!</Text>
        </View>
    );
    }


export default AlbumList;