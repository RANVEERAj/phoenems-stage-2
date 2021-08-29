import * as React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const image = { uri: 'https://cdn.wallpapersafari.com/8/91/6ZCfKI.jpg' };

import { Header } from 'react-native-elements';
import db from './localdb';
import Soundbutton from './components/soundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phones: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: 'PHOENEMS',

            style: { color: 'darkblue', fontWeight: 'bold', fontSize: 29 },
          }}
          containerStyle={{
            backgroundColor: 'yellow',
          }}
        />
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter the word"
            onChangeText={(text) => {
              this.setState({ text: text,chunks:[] ,phones:[]});
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              {
                var word = this.state.text.toLowerCase().trim();
                console.log(word);
                db[word]
                  ? (this.setState({ chunks: db[word].chunks }),
                    this.setState({ phones: db[word].phones }))
                  : (alert('This word doesnt exists in our database'),
                    this.setState({ text: '' }));
              }
            }}>
            <Text style={styles.displaytext}>GO</Text>
          </TouchableOpacity>
          {this.state.chunks.map((item, index) => {
            return (
              <Soundbutton
                wordchunk={this.state.chunks[index]}
                phoneschunk={this.state.phones[index]}
                buttonIndex={index}
              />
            );
          })}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  displaytext: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    flex: 1,
  },
  inputBox: {
    backgroundColor: 'yellow',
    padding: 10,
    marginTop: 12,
    width: 200,
    height: 50,
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 4,
    backgroundColor: 'black',
    marginTop: 10,
    justifyContent: 'center',
  },
});
