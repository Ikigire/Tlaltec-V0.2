import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import AllDiagnostics from './Screens/Diagnostics/AllDiagnostics';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#045B4F',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex',
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require("../src/assets/icons/homeBold.png") : require("../src/assets/icons/home.png")} 
              style={{ width: 36, height: 36 }} 
            />
          ),
            headerShown:false,
        }}
      />
      <Tab.Screen 
        name="Diagnostico" 
        component={AllDiagnostics} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require("../src/assets/icons/DiagnositicBold.png") : require("../src/assets/icons/Diagnositic.png")} 
              style={{ width: 36, height: 36 }} 
            />
          ),
          headerShown:false,
        }}
      />
    </Tab.Navigator>
  );
}
