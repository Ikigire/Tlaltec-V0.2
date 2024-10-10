
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlertasActualesScreen from './AlertasActualesScreen';
import { colors, Icon } from 'react-native-elements';
import AlertasPronosticadasScreen from './AlertasPronosticadasScreen';
import ToolsScreen from './ToolsScreen';
import COLORS from '../../../Constants/Color';

const Tab = createBottomTabNavigator();

export default function DetalleHuertoTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#045B4F',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex',
        },
      }}>
      <Tab.Screen
        name="Alertas Actuales"
        component={AlertasActualesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'error-outline'}
              style={{ width: 36, height: 36 }}
              color={focused ? COLORS.green : COLORS.gray}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Alertas Pronosticadas"
        component={AlertasPronosticadasScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'warning-amber'}
              style={{ width: 36, height: 36 }}
              color={focused ? COLORS.green : COLORS.gray}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Herramientas"
        component={ToolsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'handyman'}
              style={{ width: 36, height: 36 }}
              color={focused ? COLORS.green : COLORS.gray}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
