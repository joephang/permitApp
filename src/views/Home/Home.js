import * as React from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../Login';
import Dashboard from '../Dashboard';
import {Button} from 'react-native';

const propTypes = {
  FetchToken: PropTypes.func.isRequired,
  auth: PropTypes.any,
};

const defaultProps = {
  auth: null,
};

const Home = (props) => {
  const {navigation, FetchToken, auth} = props;

  const onInit = () => {
    AsyncStorage.getItem('token').then((response) => {
      FetchToken(response);
      if (auth !== null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Permit To Work'}],
        });
      }
    });
  };

  const setStorageToken = async (tokens) => {
    await AsyncStorage.setItem('token', tokens);
    onInit();
    return await AsyncStorage.getItem('token');
  };

  React.useEffect(() => {
    onInit();
  });

  return <Login loginFunction={(tokens) => setStorageToken(tokens)} />;
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
