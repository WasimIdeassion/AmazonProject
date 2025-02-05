import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MoreScreen from './src/screens/MoreScreen';
import CartScreen from './src/screens/CartScreen';
import MenuScreen from './src/screens/MenuScreen';

import OcticonsIcon from 'react-native-vector-icons/Octicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

// Helper function for rendering tab icons
const renderTabIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number = 24, // Default size,
) => {
  let IconComponent: React.ComponentType<{
    name: string;
    size: number;
    color: string;
  }> | null = null;
  let iconName: string = '';

  switch (routeName) {
    case 'Home':
      IconComponent = OcticonsIcon as React.ComponentType<{
        name: string;
        size: number;
        color: string;
      }>;
      iconName = 'home';
      break;
    case 'Profile':
      IconComponent = FontAwesomeIcon as React.ComponentType<{
        name: string;
        size: number;
        color: string;
      }>;
      iconName = 'user-o';
      break;
    case 'More':
      IconComponent = MaterialCommunityIconsIcon as React.ComponentType<{
        name: string;
        size: number;
        color: string;
      }>;
      iconName = 'cards-variant';
      break;
    case 'Cart':
      IconComponent = IoniconsIcon as React.ComponentType<{
        name: string;
        size: number;
        color: string;
      }>;
      iconName = 'cart-outline';
      break;
    case 'Menu':
      IconComponent = IoniconsIcon as React.ComponentType<{
        name: string;
        size: number;
        color: string;
      }>;
      iconName = 'menu';
      break;
    default:
      IconComponent = null;
      break;
  }

  if (!IconComponent) {
    return null;
  }

  return (
    <View style={styles.iconContainer}>
      {focused && <View style={styles.activeLine} />}
      <IconComponent name={iconName} size={size - 5} color={color} />
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: 55,
            // paddingBottom: 10,
            // paddingTop: 5,
            // borderTopWidth: 1,
            // borderTopColor: '#ccc',
          },
          tabBarLabelStyle: {fontSize: 10},
          tabBarActiveTintColor: '#008295', // Active tab color
          tabBarInactiveTintColor: '#0d0d0d', // Inactive tab color
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(route.name, focused, color, size),
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  activeLine: {
    width: 40, // Adjust the line width as needed
    height: 4, // Adjust the line height as needed
    backgroundColor: '#008295', // Change to your desired color
    marginBottom: 8, // Add spacing between the line and icon
    position: 'absolute',
    top: -10, // Adjust the line position as needed
  },
});

export default App;
