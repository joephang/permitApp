import * as React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

function Signin({navigation}) {
  const [name, setName] = React.useState('Initial');
  return (
    <View>
      <Text>Hello There! I'm Here The Signin Apps!</Text>
    </View>
  );
}

export default Signin;
