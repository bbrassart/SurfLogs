/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import useColorScheme from '../hooks/useColorScheme';
import SessionsScreen from '../screens/SessionsScreen';
import LogScreen from '../screens/LogScreen';
import { BottomTabParamList, SessionsParamList, LogParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function HomeNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Sessions">
      <BottomTab.Screen
        name="Sessions"
        component={SessionsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="stats-chart-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Log"
        component={LogNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="save" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SessionsStack = createStackNavigator<SessionsParamList>();

function SessionsNavigator() {
  return (
    <SessionsStack.Navigator>
      <SessionsStack.Screen
        name="SessionsScreen"
        component={SessionsScreen}
        options={{ headerTitle: 'Previous Sessions' }}
      />
    </SessionsStack.Navigator>
  );
}

const LogStack = createStackNavigator<LogParamList>();

function LogNavigator() {
  return (
    <LogStack.Navigator>
      <LogStack.Screen
        name="LogScreen"
        component={LogScreen}
        options={{ headerTitle: 'Log your session' }}
      />
    </LogStack.Navigator>
  );
}
