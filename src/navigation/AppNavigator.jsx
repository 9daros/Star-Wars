import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import StarshipListScreen from '../screens/StarshipListScreen';
import MovieListScreen from '../screens/MovieListScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Characters" component={CharacterListScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
      <Stack.Screen name="Starships" component={StarshipListScreen} />
      <Stack.Screen name="Movies" component={MovieListScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
