import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ContactsList from '../screens/ContactsList';
import ContactDetails from '../screens/ContactDetails';
import ActionsList from '../screens/ActionsList';
import ActionDetails from '../screens/ActionDetails';
import Settings from '../screens/Settings';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
    <ContactsStack.Navigator>
      <ContactsStack.Screen
        name="ContactsList"
        component={ContactsList}
        options={{
          headerTitle: 'Món ăn',
        }}
      />
      <ContactsStack.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={({ route }) => {
          return {
            headerTitle: `${route.params.contact.name}`,
          };
        }}
      />
    </ContactsStack.Navigator>
  );
  const ActionsStack = createStackNavigator();
  const ActionsStackScreen = () => (
    <ActionsStack.Navigator>
      <ActionsStack.Screen name="ActionsList" component={ActionsList} />
      <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
    </ActionsStack.Navigator>
  );
  
  const AppTabs = createBottomTabNavigator();
  const AppTabsScreen = () => (
    <AppTabs.Navigator
    tabBarOptions={{
        labelStyle:{
          //color:'blue',
          fontSize:15,
        },
        activeTintColor:'blue',
        inactiveTintColor:'black',
       
      }}
    >
      <AppTabs.Screen name="Món ăn" component={ContactsStackScreen} />
      <AppTabs.Screen name="Yêu thích" component={ActionsStackScreen} />
    </AppTabs.Navigator>
  );
const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Trang chủ" component={AppTabsScreen} />
    <AppDrawer.Screen name="Cài đặt" component={Settings} />
  </AppDrawer.Navigator>
);
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default () => (
  <NavigationContainer>
     <AppDrawerScreen />
  </NavigationContainer>
);