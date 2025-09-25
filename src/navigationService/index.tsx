import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { DebitCardScreen } from '../screens';
import { SvgProps } from 'react-native-svg';
import CardIcon from '../assets/images/Transfer1.svg';
import PayLogo from '../assets/images/pay.svg';
// Define the type for the bottom tab navigator's routes
type BottomTabParamList = {
  HomeStack: undefined;
  DebitCardStack: undefined;
  PayementStack: undefined;
  CreditStack: undefined;
  UserStack: undefined;
};

const icons: Record<string, React.FC<SvgProps>> = {
    HomeStack: CardIcon,
    UserStack: CardIcon,
    CreditStack: CardIcon,
    DebitCardStack: PayLogo,
  };

// Define the type for the stack navigator's routes
type HomeStackParamList = {
  Home: undefined;
};
// Create the bottom tab navigator
const Tab = createBottomTabNavigator<BottomTabParamList>();

// Create stack navigators for each tab
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const DebitCardStack = createNativeStackNavigator<HomeStackParamList>();

// Home Stack Navigator
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="Home"
        component={() => <View />}
        options={{ title: 'Payment' }}
      />
    </HomeStack.Navigator>
  );
}

// Debit card UI Stack Navigator
function DebitCardStackNavigator() {
  return (
    <DebitCardStack.Navigator screenOptions={{ headerShown: false }}>
      <DebitCardStack.Screen
        name="Home"
        component={DebitCardScreen}
        options={{ title: 'Debit Card' }}
      />
    </DebitCardStack.Navigator>
  );
}
export default function NavigationService() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Tab.Navigator
        initialRouteName="DebitCardStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const IconComponent = icons[route.name] ?? CardIcon; // fallback
            return <IconComponent width={size} height={size} fill={color} />;
          },
          tabBarActiveTintColor: '#01D167',
          tabBarInactiveTintColor: '#DDDDDD',
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{ title: 'Payment', headerShown: false }}
        />
        <Tab.Screen
          name="DebitCardStack"
          component={DebitCardStackNavigator}
          options={{ title: 'Debit Card', headerShown: false }}
        />
        <Tab.Screen
          name="PayementStack"
          component={HomeStackNavigator}
          options={{ title: 'Payment' }}
        />
        <Tab.Screen
          name="CreditStack"
          component={HomeStackNavigator}
          options={{ title: 'Credit' }}
        />
        <Tab.Screen
          name="UserStack"
          component={HomeStackNavigator}
          options={{ title: 'Users' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
