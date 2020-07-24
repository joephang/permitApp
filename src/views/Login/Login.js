import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Button, TextInput, StyleSheet, Image} from 'react-native';

const propTypes = {
  FetchToken: PropTypes.func.isRequired,
  auth: PropTypes.any.isRequired,
  loginFunction: PropTypes.func.isRequired,
};

const defaultProps = {
  auth: null,
};

const Login = (props) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {loginFunction} = props;

  const login = async (callback) => {
    callback('bearer');
  };

  return (
    <View style={style.view}>
      <Image
        style={style.marginBottom}
        source={require('../../icons/logo.png')}
      />
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={style.textInput}
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={style.textInput}
        placeholder="Password"
      />
      <Button title="Login" onPress={() => login(loginFunction)} />
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: '3%',
  },
  textInput: {
    backgroundColor: 'white',
    width: '70%',
    marginBottom: '3%',
  },
});

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
