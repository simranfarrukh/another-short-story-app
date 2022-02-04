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
  uri: 'https://wallpaperbat.com/img/47022-pastel-yellow-wallpaper-top-free-pastel-yellow-background.jpg',
};

export default function BluePerennials() {
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Card>
            <Image
              style={styles.logo}
              source={require('../assets/canary.png')}
            />
            <Text style={styles.title}>Blue Perennials</Text>
            <Text style={styles.author}>by Simran</Text>
          </Card>
          <Text style={styles.paragraph}>
            There was once a canary who was born in a cage to a pair of
            flightless canary parents. They loved her very much and only wanted
            what was best for her. {'\n'}
            {'\n'}
            They taught her to sing the most beautiful tunes that their owner, a
            sweet, old lady, loved.{'\n'}
            {'\n'}
            They taught her how to dance to please the old lady from within the
            cage on sunny days.{'\n'}
            {'\n'}
            And taught her how to eat out of the hands of the old woman who
            raised them.{'\n'}
            {'\n'}
            And they taught her to rub her face against the cage when she was
            bored so their owner would play with her.{'\n'}
            {'\n'}
            Alas! She was not good at any of the tasks they tried to teach.
            {'\n'}
            {'\n'}
            Her voice was scratchy, her movements stiff. She was always too
            scared of the old lady so she always hid away in her presence.{'\n'}
            {'\n'}
            But beyond all her shortcomings was one which vexed them greatly:
            She ached to fly.{'\n'}
            {'\n'}
            You see, the parents had had their wings cut long, long before their
            troublesome little child was born. They'd forgotten how to fly ages
            ago. And really, what use would flying be to them?{'\n'}
            {'\n'}
            Appeasing their potential was more important in a pet shop. The
            parents had long forgotten how to fly. Besides, what good would
            flying even do? It was such a useless talent. {'\n'}
            {'\n'}
            So, the canary parents were very disappointed. Shattered even, that
            their perfectly pretty pliant little daughter could not learn
            anything of value. They worried for her for they were quickly
            ageing. But so was their kind owner.{'\n'}
            {'\n'}
            And one day, it so happened that the woman who raised them passed
            away. Leaving the little canary family without a carer. Soon, the
            parents passed away. One after the other. The father from starvation
            and the mother from shock.{'\n'}
            {'\n'}
            And the little canary was left all alone.{'\n'}
            {'\n'}
            As she lay in the corner of the cage, gradually dying from hunger, a
            crow flew down to her lonesome cage and crowed at her.{'\n'}
            {'\n'}
            “Caw caw! Little birdie! Why do you look so sick?”{'\n'}
            {'\n'}
            The little canary look at him weakly and tweeted quietly, “Twit
            twit… Mr Crow. I am hungry and dying. My parents passed away and so
            did my owner. And I am hungry and so very thirsty.”{'\n'}
            {'\n'}
            “Caw caw!” exclaimed the crow. “You seem like a silly, little
            birdie! Don’t you see your cage is open? There is a pond just beyond
            the window, right there! Why don’t you fly to it? Silly little bird.
            Caw caw!” And the crow pointed towards the window that sat right
            beside her cage, beyond which lay a magnificent garden laden with
            fruits and nuts and a lovely lotus pond.{'\n'}
            {'\n'}
            “Twit twit…” the canary whined, shaking her head as she explained.
            “I do not know how to fly, Mr Crow. My parents never let me so I
            never learnt.”{'\n'}
            {'\n'}
            The crow was dumbfounded. A canary that cannot fly? He had never
            heard something so atrocious in his life! {'\n'}
            {'\n'}
            He looked at her wings for signs of breakage but they were perfectly
            pearly pink. With red and orange streaks, and shiny. She carried a
            set of one of the prettiest wings he’d ever seen on a bird!{'\n'}
            {'\n'}
            “Caw caw!” he said, “poor little birdie. Such pretty wings you have
            yet you never learnt to fly?” “Caw caw!” he sighed, flying away,
            “sit tight, little birdie! I’ll bring you some water! And once
            you’re full enough, I will teach you to fly so you can leave this
            stuffy little cage! Caw caw!”{'\n'}
            {'\n'}
            The canary was too weak to reply, so she simply nodded her head—she
            hoped her gratitude was apparent in her eyes for she could not even
            speak from the thirst. {'\n'}
            {'\n'}
            And so the crow flew away towards the lotus pond. He plucked a lotus
            leaf and folded it into a cup. Just enough to carry some water for
            the canary in it. And he flew right back, eager to give it to the
            canary. All the while wondering how could a canary not know how to
            fly?!{'\n'}
            {'\n'}
            But when he reached the little cage he found the little canary
            already dead. Her chest was no longer moving and her eyes were
            closed. Her long, beautiful wings didn’t move even as he pour the
            water into her beak. {'\n'}
            {'\n'}
            And so the crow shed some tears and laid a lotus flower on top of
            the dead bird. He offered a prayer for her parted soul and flew
            away. {'\n'}
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
