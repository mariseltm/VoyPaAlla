import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './screens/MainScreen';
import InfoRoutes from './components/InfoRoutes';
import RouteInfo from './components/RouteInfo';
import RouteCard from './components/RouteCard';

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
    }
  },
  {
    initialRouteName: 'Main',
  },
));

function App() {
  return (
    <MainNavigator />
  );
}

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
