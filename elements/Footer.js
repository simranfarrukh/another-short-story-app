import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Website from './urls/Website';
import Instagram from './urls/Instagram';
import Github from './urls/Github';
import Linkendin from './urls/Linkedin';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Website url="https://simranfarrukh.com"></Website>

      <Instagram url="https://www.instagram.com/cmimiu/"></Instagram>

      <Github url="https://github.com/simranfarrukh"></Github>

      <Linkendin url="https://www.linkedin.com/in/simran-farrukh-56b885178/?originalSubdomain=ca"></Linkendin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
