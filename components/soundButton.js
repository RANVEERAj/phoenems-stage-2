import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class Soundbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedButtonIndex: '',
    };
  }

  playSound = async (phoneschunk) => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://s3-whitehatjrcontent.whjr.online/phones/' +
          phoneschunk +
          '.mp3',
      },
      { shouldPlay: true }
    );
  };
  render() {
    {
      return (
        <TouchableOpacity
          style={this.props.buttonIndex===this.state.pressedButtonIndex?
          [styles.button1,{backgroundColor:"black"}]:styles.button1}
          onPress={() => {this.playSound(this.props.phoneschunk)
          this.setState({
            pressedButtonIndex:this.props.buttonIndex
          })
          
          }}>
          <Text style={this.props.buttonIndex===this.state.pressedButtonIndex?
          [styles.displaytext,{color:"yellow"}]:styles.displaytext}>
            {this.props.wordchunk}
          </Text>
        </TouchableOpacity>
      );
    }
  }
}
const styles = StyleSheet.create({
  displaytext: {
    color: 'black',
    textAlign: 'center',
  },

  button1: {
    alignSelf: 'center',
    width: 100,
    height: 50,
    borderRadius: 30,
    borderWidth: 4,
    backgroundColor: 'yellow',
    marginTop: 10,
    justifyContent: 'center',
  },
});
