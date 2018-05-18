//import libraries for making a component
import React from 'react';
import{Text,View} from 'react-native';
//make a component
const Header =(proms) =>{
    const {textStyle,viewStyle}=styles;

    return(
        <view style={styles.viewStyle}>
           <Text style={textStyle}>{props.headerText}</Text>
        </view>
            );
};
const styles ={
                viewStyle:{
                    backgroundColor:'#FF7F7',
                    justifyContent:'center',
                    alignItems:'center',
                    height:60,
                    paddingTop:50,
                    shadowColor:'000',
                    shadowOffset:{width:0 , height:2},
                    shadow0pacity:0.2,
                    elevation:2,
                    position:'relative'
                },

                  textStyle:{
                               fontSize:20
                  }
};
//Make the component aailable to other parts of the app
export default Header
