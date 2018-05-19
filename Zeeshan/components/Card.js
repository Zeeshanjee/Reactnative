import React from 'react';
import{view} from 'react-native';

const Card = (props) => {

    return(
        <view style={styles.containerStyle}>
    {props.children}</view>
    );
};
const Styles = {

    containerStyle: {
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'000',
        shadow0ffset:{Width:0 , Height:2},
        shadow0Capacity:0.1,
        shadowRadius:2,
        evelation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,




    }
}
export default card;
