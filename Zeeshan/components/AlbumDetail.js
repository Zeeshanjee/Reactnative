import React from 'react';
import {view,text} from 'react-native';
import Card from './Card';

const AlbumDetail =(props) =>{
    return(
        <Card>
            <Text>{props.album.title}</Text>
        </Card>
    );

};
export default AlbumDetail;