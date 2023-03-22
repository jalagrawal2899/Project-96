import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fridge from "../screens/fridge";
import ShoppingCart from "../screens/cart";

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
  return(
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Refrigerator') {
              iconName = focused
                ? 'snow'
                : 'snow-outline';
            } else if (route.name === 'Shopping Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2784d0',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Refrigerator" component={Fridge} options={{headerShown:false}}/>
        <Tab.Screen name="Shopping Cart" component={ShoppingCart} options={{headerShown:false}}/>
      </Tab.Navigator>
    
  )
}
export default BottomTabNavigator;