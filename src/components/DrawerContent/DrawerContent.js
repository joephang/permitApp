import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

const propTypes = {
  FetchToken: PropTypes.func.isRequired,
  auth: PropTypes.any,
};

const defaultProps = {
  auth: null,
};

function DrawerContent(props) {
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
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Image
                source={require('../../icons/logo.png')}
                style={{width: '30%', height: '100%', resizeMode: 'center'}}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Text style={styles.title}>John Doe</Text>
                <Text style={styles.caption}>@j_doe</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.drawerSection}>
          <DrawerItem
            // icon={({color, size}) => (
            //   <FontAwesome5Icon name="home-outline" color={color} size={size} />
            // )}
            label="Dashboard"
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
          <DrawerItem
            // icon={({color, size}) => (
            //   <FontAwesome5Icon name="bars" color={color} size={size} />
            // )}
            label="Notifikasi"
            onPress={() => {
              props.navigation.navigate('Profile');
            }}
          />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          onPress={async () => {
            await logoutFunction();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

DrawerContent.propTypes = propTypes;
DrawerContent.defaultProps = defaultProps;

export default DrawerContent;
