import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const propTypes = {
  FetchToken: PropTypes.func.isRequired,
  auth: PropTypes.any.isRequired,
};

const defaultProps = {
  auth: null,
};

const Dashboard = (props) => {
  const {navigation, FetchToken, auth} = props;

  const onInit = () => {
    AsyncStorage.getItem('token').then((response) => {
      FetchToken(response);
      if (auth === null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
    });
  };

  const setStorageToken = async (tokens) => {
    await AsyncStorage.setItem('token', tokens);
    onInit();
    return await AsyncStorage.getItem('token');
  };

  const logoutFunction = async () => {
    await setStorageToken('');
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <View style={style.view}>
      <Image source={require('../../icons/logo.png')} />
      <View style={style.bottomSection}>
        <TouchableOpacity
          style={style.center}
          onPress={() => navigation.navigate('Permit')}>
          <Image source={require('../../icons/ic_permit.png')} />
          <Text>Permit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.center}>
          <Image source={require('../../icons/ic_report.png')} />
          <Text>Riwayat</Text>
        </TouchableOpacity>
      </View>
      <Button title="Logout" onPress={() => logoutFunction()} />
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
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;
