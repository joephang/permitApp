import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/Home';
import Dashboard from './src/views/Dashboard';
import {Provider} from 'react-redux';
import configureStore from './store';
import {View, Text, StyleSheet} from 'react-native';
import DrawerContent from './src/components/DrawerContent';
import Permit from './src/views/Permit';
import CreatePermit from './src/views/CreatePermit';

const store = configureStore();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Profile = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Dashboard">
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Permit To Work" component={DrawerNavigator} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Permit" component={Permit} />
          <Stack.Screen name="CreatePermit" component={CreatePermit} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
