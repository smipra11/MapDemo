/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <MapView
      style={{flex: 1}}
      region={{
        latitude: 42.882004,
        longitude: 74.582748,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      zoomEnabled={true}
      scrollEnabled={true}
      showsScale={true}
    />
  );
};

export default App;
