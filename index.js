
import React from'react';
import { Text,AppRegistry,view } from 'react-native';
import Header from './Zeeshan/components/header';
import AlbumList from './Zeeshan/components/AlbumList';
//create a component
const App = ()=>(
    <view>
    <Header headerText={'Albums!'} />
    <AlbumList />
    </view>
);
AppRegistry.registerComponent('albums', () => App);

