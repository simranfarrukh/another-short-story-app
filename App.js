import * as React from 'react';

import {
  StyleSheet,
  Button,
  View,
  Text,
  ImageBackground,
  Alert,
} from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constants from 'expo-constants';

// You can import from local files
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import ButterflyBoy from './components/ButterflyBoy';
import CinderellaShoes from './components/CinderellaShoes';
import FlightlessCanary from './components/FlightlessCanary';
import BluePerennials from './components/BluePerennials';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const image = {
  uri: 'https://i.pinimg.com/474x/7e/cb/29/7ecb29d2fe42cd9adc92e65dbffd5db6.jpg',
};

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Navbar />
      </Card>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.options}>
          <Button
            title="The Flightless Canary"
            color="#ff"
            onPress={() => navigation.navigate('The Flightless Canary')}
          />
          <Button
            title="Butterfly Boy"
            color="#ff"
            onPress={() => navigation.navigate('Butterfly Boy')}
          />
          <Button
            title="Cinderella's Red Shoes"
            color="#ff"
            onPress={() => navigation.navigate("Cinderella's Red Shoes")}
          />
          <Button
            title="Blue Perennials"
            color="#ff"
            onPress={() => navigation.navigate('Blue Perennials')}
          />
        </View>
      </ImageBackground>
      <Card style={styles.footer}>
        <Footer />
      </Card>
    </View>
  );
}

function CanaryScreen({ navigation }) {
  return (
    <View>
      <FlightlessCanary />
    </View>
  );
}

function ButterflyScreen({ navigation }) {
  return (
    <View>
      <ButterflyBoy />
    </View>
  );
}

function CinderellaScreen({ navigation }) {
  return (
    <View>
      <CinderellaShoes />
    </View>
  );
}

function BlueScreen({ navigation }) {
  return (
    <View>
      <BluePerennials />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="The Flightless Canary" component={CanaryScreen} />
        <Stack.Screen name="Butterfly Boy" component={ButterflyScreen} />
        <Stack.Screen name="Cinderella's Red Shoes" component={CinderellaScreen} />
        <Stack.Screen name="Blue Perennials" component={BlueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  options: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 20,
  },
});

export default App;
