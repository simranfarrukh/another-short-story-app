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

const image = { uri: 'https://wallpapercave.com/wp/wp3758833.jpg' };

export default function ButterflyBoy() {
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Card>
            <Image
              style={styles.logo}
              source={require('../assets/butterflyboy.png')}
            />
            <Text style={styles.title}>Cinderella's Red Shoes</Text>
            <Text style={styles.author}>by Simran</Text>
          </Card>
          <Text style={styles.paragraph}>
            Once upon a time, in a small town whose name I can never remember, a
            baby boy was born in the middle of an eclipse. {'\n'}
            {'\n'}
            With a pale, sickly complexion and pulsating boils all over his
            body, the boy cried all day long. {'\n'}
            {'\n'}
            His skin, frail and almost dead, would peel away, painfully at a
            mere touch. {'\n'}
            {'\n'}
            Angrily. {'\n'}
            {'\n'}
            Mercilessly. {'\n'}
            {'\n'}
            With that fragile body, like a butterfly’s wings, always hurting—
            always in pain, all he did was trigger disgust in anyone who saw
            him.{'\n'}
            {'\n'}
            Even his mother…{'\n'}
            {'\n'}
            Scared by his ghastly appearance, the mother locked him away in a
            tiny bedroom of their tiny, little house.{'\n'}
            {'\n'}
            Vowing to never lay eyes on him again.{'\n'}
            {'\n'}
            Still, she was his mother after all, and her heart wouldn’t allow
            her to just let the poor, unfortunate child die. {'\n'}
            {'\n'}
            So she tasked her eldest son, his brother, with a chore.{'\n'}
            {'\n'}
            “Take care of him, my son. For he is your brother,” She had said.
            {'\n'}
            {'\n'}
            “Feed him the food I make for you. And talk to him when he finds the
            silence frightening. {'\n'}
            {'\n'}
            Comfort him when he’s in pain, my son. {'\n'}
            {'\n'}
            For he is your brother…” {'\n'}
            {'\n'}
            Alas! Fate was not so lenient, towards the poor, little butterfly
            boy.{'\n'}
            {'\n'}
            Sickened by the way his brother looked, the elder brother left no
            stone unturned in torturing the poor soul. {'\n'}
            {'\n'}
            “You monster!” He would yell at the butterfly boy. {'\n'}
            {'\n'}
            And throw food at him out of apparent spite. {'\n'}
            {'\n'}
            He would gather the town's children, and mock the little boy to his
            face.{'\n'}
            {'\n'}
            Yelling at him.{'\n'}
            {'\n'}
            Beating him. {'\n'}
            {'\n'}
            Starving him.{'\n'}
            {'\n'}
            Hurting him all the more.{'\n'}
            {'\n'}
            And every day the deformed boy would watch from a small peephole in
            his prison room. {'\n'}
            {'\n'}
            He watched his mother kiss, hug, love the elder brother.{'\n'}
            {'\n'}
            Watched her caress his face with affection every time the evil
            brother did something nice for her.{'\n'}
            {'\n'}
            And watched her pat his back when she was proud.{'\n'}
            {'\n'}
            He watched her watch the elder brother sleep with a smile on her
            face. {'\n'}
            {'\n'}
            The mother, none the wiser, lived content with the knowledge that
            despite her revulsion for her youngest, her eldest was there for
            him.{'\n'}
            {'\n'}
            As she grew older, the mother’s eyesight depleted and her face was
            adorned by glasses so huge they covered half her visage.{'\n'}
            {'\n'}
            Sometimes the butterfly boy wondered how nice it would be if those
            glasses just broke.{'\n'}
            {'\n'}
            Would she finally love me too?{'\n'}
            {'\n'}
            Years dragged away in the same fashion, with the elder brother
            tormenting the one. {'\n'}
            {'\n'}
            With the younger brother hurting still.{'\n'}
            {'\n'}
            One day, however…{'\n'}
            {'\n'}
            On a day when the sun decided to hide away from the little boy, much
            like the day he was born, something in him snapped.{'\n'}
            {'\n'}
            His anger, his hatred for his brother, tipped over his vessel of
            patience.{'\n'}
            {'\n'}
            So he waited that night for his brother to bring him food, just like
            he always did every day.{'\n'}
            {'\n'}
            His brother waltzed into the room, with a small serving of meat and
            another slew of insults ready to hurl, when the little boy jumped at
            him.{'\n'}
            {'\n'}
            He scratched.{'\n'}
            {'\n'}
            And bit.{'\n'}
            {'\n'}
            And punched.{'\n'}
            {'\n'}
            And cut the elder brother.{'\n'}
            {'\n'}
            Finally releasing all his pent up anger, he killed the evil brother.
            {'\n'}
            {'\n'}
            And carved out his skin, that he was so very proud of, to wear as
            his own.{'\n'}
            {'\n'}
            With his brother’s blood on his hands, and his skin on his back, he
            ventured out of his prison for the first time ever.{'\n'}
            {'\n'}
            Timid steps wandering purposefully around the small house in search
            of his mother.{'\n'}
            {'\n'}
            He found her sleeping in her chair and hesitated before stepping
            closer.{'\n'}
            {'\n'}
            She woke up at the sound of his quiet footsteps though, and called
            for the brother he had killed and was wearing.{'\n'}
            {'\n'}
            Her hands, searching for her glasses, never reached them— he slid
            the glasses away so she wouldn’t see.{'\n'}
            {'\n'}
            And he stood in front of the woman who had birthed him all those
            long years ago and all she did was squint.{'\n'}
            {'\n'}
            “Did you hurt yourself, my son?” She asked, alarm evident in the
            sharpness of her voice.{'\n'}
            {'\n'}
            And for the first time ever, she reached out to touch him. {'\n'}
            {'\n'}
            Caressing and blowing at his brother’s blood on his face that she
            mistook for a wound.{'\n'}
            {'\n'}
            And for the first time ever, the peeling of his skin didn’t hurt.
            {'\n'}
            {'\n'}
            For the first time ever, the pain was bearable.{'\n'}
            {'\n'}
            And in a broken voice he spoke, for the first time ever, “how come
            your touch… doesn’t hurt? M… Mother…”{'\n'}
            {'\n'}
            She jerked her hand back at his voice, as if burned by his words.{' '}
            {'\n'}
            {'\n'}
            As if she had realised it was him instead of the elder son.{'\n'}
            {'\n'}
            “My boy…” she said. Acknowledging his existence for the first time
            since he’d been locked away.{'\n'}
            {'\n'}
            She hesitated. Her fingers halted before she forced them to reach
            back towards the boy.{'\n'}
            {'\n'}
            But he was gone.{'\n'}
            {'\n'}
            He ran away, with his brother’s blood staining his hands and his
            skin molting on his back.{'\n'}
            {'\n'}
            He ran away, with the memory of the loving touch of his mother
            etched into his mind.{'\n'}
            {'\n'}
            What did the boy really want?{'\n'}
            {'\n'}
            Revenge on his brother for all those years of torment?{'\n'}
            {'\n'}
            Or affection from his mother that he never gained?{'\n'}
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
