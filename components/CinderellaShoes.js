import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { Card } from 'react-native-paper';

const image = {
  uri: 'https://aws1.discourse-cdn.com/pocketgems/uploads/episodeinteractive/original/4X/0/6/b/06be7eee60a3240e53c8d8f18c537408d18be45b.jpeg',
};

export default function FlightlessCanary() {
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Card>
            <Image
              style={styles.logo}
              source={require('../assets/cinderellashoes.png')}
            />
            <Text style={styles.title}>Cinderella's Red Shoes</Text>
            <Text style={styles.author}>by Simran</Text>
          </Card>
          <Text style={styles.paragraph}>
            The Prince searches for days on end for Cinderella, clutching onto
            her red ballet shoe as if holding life itself in his hands. He
            searches the hills and the lakes and the small villages hidden in
            the valleys but finds her he does not.{'\n'}
            {'\n'}
            As days pass, he starts to lose hope. Alas! Is the girl lost
            forever!? He wondered. However, as fate would have it, on the tenth
            day of his search for the mysterious ballerina, by some stroke of
            luck, he finds her. Sitting in a cosy little corner of the woods,
            she lived with her stepmother and sisters in a wooden hut.{'\n'}
            {'\n'}
            He barges into the little hut and demands the stepmother and sisters
            to present their left feet to try the shoe on. The ladies comply
            willingly, neither of them is Cinderella though. But the Prince is
            no fool. He sees the women share fervent glances with each other and
            shoot uneasy glances at the basement door.{'\n'}
            {'\n'}
            He charges his soldiers towards the basement, yelling at his guards
            to hold the stepmother and sisters down. And there, in the corner of
            the dingy basement, hiding under the fireplace sits Cinderella with
            her arms around her body defensively. {'\n'}
            {'\n'}
            The shoe fits her wonderfully.{'\n'}
            {'\n'}
            So, he commands his soldiers to have her taken away from the
            wretched family of hers. Out from the dingy, mouldy basement and
            into the royal palanquin. The stepmother and sisters yell, bite, and
            beg the Prince to not take her away. They are beheaded on the spot
            for keeping her incognito for so long.{'\n'}
            {'\n'}
            As the Prince’s entourage returns to the palace, there are greeted
            with fanfare, felicities, fireworks, and music. The kingdom is
            rejoicing like it's the eve of Christmas as they welcome the new
            Princess. The Princes escorts his to-be Princess to her bedroom and
            kisses her hand before excusing himself.
            {'\n'}
            {'\n'}
            The festivities in the Kingdom continue all night as Cinderella sits
            in her royal tower, crying as she mourns the death of her stepmother
            and sisters. The sky from her bedroom shimmers with kaleidoscopic
            hues of fireworks rejoicing another year of prosperous crop and
            wealth for the kingdom. The doors and windows in her room are locked
            but she has given up on trying to run away.{'\n'}
            {'\n'}
            In the morning, she will be married to the Prince in a royal, ritual
            wedding. And at night he will put on the red ballet shoes on her
            feet so she can dance for the Fairy Godmother until her feet bleed
            or she dies (whichever shall come first); thereby fulfilling her
            destiny as the 99th Bride of Prince Charming.{'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  paragraph: {
    margin: 5,
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'Times New Roman',
  },
  logo: {
    height: 150,
    width: 150,
    justifyContent: '',
  },
  title: {
    position: 'absolute',
    top: 55,
    right: 20,
    fontSize: 16,
    fontFamily: 'Times New Roman',
  },
  author: {
    position: 'absolute',
    top: 70,
    right: 20,
    fontSize: 14,
    fontFamily: 'Times New Roman',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
