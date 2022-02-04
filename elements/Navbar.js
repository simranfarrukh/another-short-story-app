import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hi! I'm Simran~</Text>
      <Text style={styles.paragraph}>
        I'm a react developer with a penchant for design and storytelling.
        Hence, the creation of this app!{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    margin: 20,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
  },
  paragraph: {
    margin: 20,
    marginLeft: 20,
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Times New Romanc',
  },
});
