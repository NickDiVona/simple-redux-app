// imports from node_modules
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// imports from user created files
import { incrementCount } from '../redux/actionCreators';

// make component itself
class ReduxNumber extends Component {
  // set up a helper method to handle when the button is pressed
  onButtonPress() {
    this.props.incrementCount();
  }

  // set up the default render method
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={{ fontSize: 36 }}>{this.props.count.count}</Text>
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

// set up mapStateToProps
// this allows us to READ info from the global state
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

// set up mapDispatchToProps
// this allows to UPDATE the info in the global state
const mapDispatchToProps = {
  incrementCount: () => incrementCount()
};

// set up the stylesheet
const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  buttonStyle: {
    backgroundColor: 'lightblue',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// export the component to be used somewhere else
// the word "connect" connects this component to the redux data store
// mapStateToProps is always before mapStateToProps if it exists
export default connect(mapStateToProps, mapDispatchToProps)(ReduxNumber);
