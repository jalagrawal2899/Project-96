import * as React from 'react';
import {  View, StyleSheet, Image, Text } from 'react-native';
import AppHeader from '../assets/appHeader'

class Home extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
          <Text style={styles.text}>Press On The Handle To Open Your Fridge</Text>
        <Image source={require('../fridge.png')} style={styles.image}/>
   
      </View>
    );
  }
}

const styles = StyleSheet.create({

image :{ 
  
      width: 500, 
      height: 600, 
      marginTop: -40,
      alignSelf:'center',
      justifyContent:'center',
      
      
    },
    text:{
      color:'black',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:18
    }
});

export default Home;