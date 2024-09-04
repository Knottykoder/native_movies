import React from 'react';
import Tabs from './components/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './components/Navigation';

function App(): React.JSX.Element {
  const isLogin = false;
  return (
    <NavigationContainer>
      {isLogin ? <Navigation /> : <Tabs />}
    </NavigationContainer>
  );
}

export default App;
