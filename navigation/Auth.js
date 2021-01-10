import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  showHomeIcon,
  showLoginIcon,
  showScoreBoardIcon,
  showSettingsIcon,
  showSignupIcon,
} from '../components/TabBarIcon';
import Home from '../components/screens/Auth/Home';
import ScoreBoard from '../components/screens/Auth/ScoreBoard';
import Settings from '../components/screens/Auth/Settings';
import Signin from '../components/screens/NonAuth/Signin';
import Signup from '../components/screens/NonAuth/Signup';

const Tab = createBottomTabNavigator();

export const AuthStack = () => (
  <Tab.Navigator initialRouteName="Home" lazy={false}>
    <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: showHomeIcon }} />
    <Tab.Screen
      name="ScoreBoard"
      component={ScoreBoard}
      options={{ tabBarIcon: showScoreBoardIcon }}
    />
    <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: showSettingsIcon }} />
  </Tab.Navigator>
);

export const NonAuthStack = () => (
  <Tab.Navigator initialRouteName="Login" lazy={false}>
    <Tab.Screen name="Login" component={Signin} options={{ tabBarIcon: showLoginIcon }} />
    <Tab.Screen name="Signup" component={Signup} options={{ tabBarIcon: showSignupIcon }} />
  </Tab.Navigator>
);
