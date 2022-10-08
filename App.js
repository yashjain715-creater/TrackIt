import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './src/Home';
import ProfileScreen from './src/Profile';

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
        screenOptions={{
          title: 'TrackIt',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F9C201',
          },
          headerTintColor: '#FFFFFF',
        }}
      >
				<Stack.Screen
					name="Home"
					component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate('Profile')}
                name="user-circle"
                color="#FFFFFF"
                size={24}
              />
            ),
            headerRightContainerStyle: {
              marginRight: 8
            }
          })}
				/>
				<Stack.Screen
					name="Profile"
					component={ProfileScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
