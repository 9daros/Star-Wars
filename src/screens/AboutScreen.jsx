import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RA:1134697 </Text>
      <Text>Nome Completo: Ricardo de Assunção Dahmer</Text>
      <Text>Email: 1134697@atitus.edu.br</Text>
      <Text>------------------------------------------------------------------------------</Text>
      <Text>RA:1135584 </Text>
      <Text>Nome Completo: Roberto Jacobs</Text>
      <Text>Email: 1135584@atitus.edu.br</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AboutScreen;
