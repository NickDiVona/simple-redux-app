// imports from node_modules
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// make the component itself
class Number extends Component {
  // add a constructor
  constructor(props) {
    super(props);

    // declare state and initial values
    this.state = {
      count: 0
    };
  }

  // set up a helper method to handle when the button is pressed
  onButtonPress() {
    this.setState({
      count: this.state.count + 1
    });
  }

  // set up the default render method
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={{ fontSize: 36 }}>{this.state.count}</Text>
        {/* this is our custom button */}
        <TouchableOpacity onPress={() => this.onButtonPress()}>
          <View style={styles.buttonStyle}>
            <Text>Add one</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// set up the stylesheet
const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  buttonStyle: {
    backgroundColor: 'lightsalmon',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// export the component to be used somewhere else
export default Number;
