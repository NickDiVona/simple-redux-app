import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { incrementCount } from '../redux/actionCreators';

class ReduxNumber extends Component {
  onButtonPress() {
    this.props.incrementCount();
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 36 }}>{this.props.count.count}</Text>
        <TouchableOpacity onPress={() => this.onButtonPress()}>
          <View
            style={{
              backgroundColor: 'lightblue',
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

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  incrementCount: () => incrementCount()
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxNumber);
