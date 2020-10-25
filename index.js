/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Navigation from './App/config/navigation';
AppRegistry.registerComponent(appName, () => Navigation);
// import React from 'react';
 

// export default () => <Navigation />;