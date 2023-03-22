import React,{Component} from 'react';
import {Button,View} from 'react-native';

export default class Test extends Component {
  constructor(props){
    super(props);
    this.state=({
      buttonColor:'red'
    })
  }
  onButtonPress = () => {
  this.setState({ buttonColor: 'green' }); 
}
  render() {
   // var buttonColor = 'red';
 //  function changeButtonColor() {
 //    if (this.buttonColor === 'red') {
 //      this.buttonColor = 'green';
 //    } else {
 //      this.buttonColor = 'red';
 //    }
 //  }
    return (
      <View>
        
        <Button
          title="Press me!"
          color={this.state.buttonColor}
      onPress={this.onButtonPress}
        />
      </View>
    );
  }
}
