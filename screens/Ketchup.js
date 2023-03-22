import React, { useState } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function Ketchup() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        backgroundColor: active ? 'red' : 'green',
        width: 320,
        marginLeft: 20,
        marginTop: 20,
        height: 55,
      }}>
      <Image source={require('../ketchup.png')} style={styles.image} />
      <Text style={styles.cardText}>Ketchup</Text>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
  image:{
    marginLeft:20,
    width:50,
    height:50,
    marginTop:2
  },
  cardText:{
     marginLeft:90,
     color:'white',
     fontWeight:'bold',
     marginTop:-35
  },

})
export default Ketchup;
