import * as React from 'react';
import {  View, StyleSheet, Image, Text } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.bg}>
        <Image source={require('../tlogo.png')} style={styles.image}/>
        <Text> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

image :{ 
      width: 300, 
      height: 90, 
      marginTop: 40,
      alignSelf:'center',
      justifyContent:'center',
      
      
    },
    bg:{
       backgroundColor:'#c5fbfb'
    }
});

export default AppHeader;