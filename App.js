import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './screens/MainScreen';
import InfoRoutes from './components/InfoRoutes';
import RouteInfo from './components/RouteInfo';
import RouteCard from './components/RouteCard';
import HowToGo from './components/HowToGo';

import { StateProvider } from './store.js';

const MainNavigator = createAppContainer(createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    InfoRoutes: {
      screen: InfoRoutes,
      navigationOptions: {
        headerShown: false
      }
    },
    RouteInfo: {
      screen: RouteInfo,
      navigationOptions: {
        headerShown: false
      }
    },
    RouteCard: {
      screen: RouteCard,
      navigationOptions: {
        headerShown: false
      }
    },
    HowToGo: {
      screen: HowToGo,
      navigationOptions: {
        headerShown: false
      }
    },
  },
  {
    initialRouteName: 'Main',
  },
));

function App() {
  return (
    <StateProvider>
      <MainNavigator />
    </StateProvider>
  );
}

export default App;


