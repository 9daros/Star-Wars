import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getMovies } from '../api/swapi';

const MovieListScreen = ({ route }) => {
  const { films } = route.params;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    if (films.length === 0) {
      setMovieData(null);
    } else {
      getMovies(films).then(responses => {
        setMovieData(responses.map(response => response.data));
      });
    }
  }, []);

  if (movieData === null) {
    return <Text>Nenhum filme disponível.</Text>;
  }

  return (
    <View>
      <FlatList
        data={movieData}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            <Text>Titulo: {item.title}</Text>
            <Text>Diretor: {item.director}</Text>
            <Text>Data de lançamento: {item.release_date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MovieListScreen;
