import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RA:1135569 </Text>
      <Text>Nome Completo: Henrique Daros</Text>
      <Text>Email: 1135569@atitus.edu.br</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AboutScreen;
