import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getStarships } from '../api/swapi';

const StarshipListScreen = ({ route }) => {
  const { starships } = route.params;
  const [starshipData, setStarshipData] = useState([]);

  useEffect(() => {
    if (starships.length === 0) {
      setStarshipData(null);
    } else {
      Promise.all(starships.map(url => getStarships(url)))
        .then(responses => {
          setStarshipData(responses.map(response => response.data));
        });
    }
  }, []);

  if (starshipData === null) {
    return <Text>Nenhuma nave estelar disponível.</Text>;
  }

  return (
    <View>
      <FlatList
        data={starshipData}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Model: {item.model}</Text>
            <Text>Passengers: {item.passengers}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StarshipListScreen;
