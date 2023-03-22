import React, { Component } from 'react';
import {  View, TouchableOpacity, StyleSheet, Image, Text, ScrollView } from 'react-native';
import AppHeader from '../assets/appHeader';

import Beans            from  './Beans';
import Bread        from  './Bread';
import Butter       from  './Butter';
import Cheese     from  './Cheese';
import ColdDrink       from  './ColdDrink';
import CornFlour     from './CornFlour';
import Curd       from  './Curd';
import DryFruits   from  './DryFruits';
import Eggs              from  './Eggs';
import Fish            from  './Fish';
import Flour           from  './Flour';
import Fruits           from  './Fruits';
import Garlic         from  './Garlic';
import Juice             from  './Juice';
import Ketchup           from  './Ketchup';
import Lemon             from './Lemon';
import Mayo             from  './Mayo';
import Meat            from  './Meat';
import Milk              from  './Milk';
import Onion          from  './Onion';
import Paneer          from  './Paneer';
import Pepper            from  './Bread';
import Potato           from  './Potato';
import Tomatoes              from  './Tomatoes';
import Vegetables             from  './Vegetables';
import Vinegar             from  './Vinegar';






export default class Fridge extends Component {
    render() {
        return (
             <View >
                <AppHeader/>
              <ScrollView>
              <Beans     />
              <Bread     />
              <Butter    />
              <Cheese    />
              <ColdDrink />
              <CornFlour />
              <Curd      />
              <DryFruits />
              <Eggs      />
              <Fish      />
              <Flour     />
              <Fruits    />
              <Garlic    />
              <Juice     />
              <Ketchup   />
              <Lemon     />
              <Mayo      />
              <Meat      />
              <Milk      />
              <Onion     />
              <Paneer    />
              <Pepper    />
              <Potato    />
              <Tomatoes    />
              <Vegetables/>
              <Vinegar   />
               
                </ScrollView>
            </View>
            
        )
    }
}
//const styles=StyleSheet.create({
//  image:{
//    marginLeft:20,
//    width:50,
//    height:50,
//    marginTop:2
//  },
//  cardText:{
//     marginLeft:90,
//     color:'white',
//     fontWeight:'bold',
//     marginTop:-35
//  },
//  button:{
//    backgroundColor:'green',
//    width:320,
//    marginLeft:20,
//    marginTop:20,
//    height:55
//  }
//})

