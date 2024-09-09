import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CharacterDetailScreen = ({ route, navigation }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text>Nome: {character.name}</Text>
      <Text>Altura: {character.height}</Text>
      <Text>Peso: {character.mass}</Text>
      <Text>Cor do cabelo: {character.hair_color}</Text>
      <Text>Cor da pele: {character.skin_color}</Text>
      <Text>Cor dos Olhos: {character.eye_color}</Text>
      <Text>Gênero: {character.gender}</Text>
      
      <Button title="Starships" onPress={() => navigation.navigate('Starships', { starships: character.starships })} />
      <Button title="Movies" onPress={() => navigation.navigate('Movies', { films: character.films })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default CharacterDetailScreen;
