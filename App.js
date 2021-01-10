import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from './components/screens/SplashScreen';
import firebase from './firebase/config';
import { AuthStack, NonAuthStack } from './navigation/Auth';
import store from './redux/store';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(data) {
    setUser(data);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const authSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{user ? <AuthStack /> : <NonAuthStack />}</NavigationContainer>
    </Provider>
  );
}
