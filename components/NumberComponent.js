import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Number extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  onButtonPress() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50
        }}
      >
        <Text style={{ fontSize: 36 }}>{this.state.count}</Text>
        <TouchableOpacity onPress={() => this.onButtonPress()}>
          <View
            style={{
              backgroundColor: 'lightsalmon',
              width: 200,
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Add one</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Number;
