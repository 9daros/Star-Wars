import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Text>{character.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default CharacterCard;
