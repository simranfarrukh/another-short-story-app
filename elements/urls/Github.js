import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Linking,
  Image,
} from 'react-native';

const Github = (props) => {
  const { url, children, style = {} } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.icon} source={require('../urlassets/github.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: 20,
    margin: 20,
    height: 50,
    width: 50,
  },
});

export default Github;
