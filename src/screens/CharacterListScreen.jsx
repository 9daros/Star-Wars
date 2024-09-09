import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { getCharacters } from '../api/swapi';
import CharacterCard from '../components/CharacterCard';

const CharacterListScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(response => {
      setCharacters(response.data.results.slice(0, 5)); // 5 personagens
    });
  }, []);

  // Adiciona o botão de "Sobre" no cabeçalho
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('About')}
          title="Sobre"
          color="#000"
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { character: item })}>
            <CharacterCard character={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CharacterListScreen;
