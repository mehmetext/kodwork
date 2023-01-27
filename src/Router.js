import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from './pages/Jobs';
import Favorites from './pages/Favorites';
import JobDetails from './pages/JobDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerStack = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Jobs" component={Jobs} />
    <Drawer.Screen name="Favorites" component={Favorites} />
  </Drawer.Navigator>
);

export default function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={DrawerStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="JobDetails"
            component={JobDetails}
            options={({route}) => ({title: route.params.job.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
