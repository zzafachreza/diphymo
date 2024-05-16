import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { MyButton, MyGap } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { MYAPP, getData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Easing } from 'react-native-reanimated';

export default function Splash({ navigation }) {


  const img = new Animated.Value(0);
  const star = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(img, {
          toValue: 20,
          duration: 1200,
          useNativeDriver: true

        }),
        Animated.timing(img, {
          toValue: -20,
          duration: 1200,
          useNativeDriver: true
        })
      ]),
      {
        iterations: 50
      }
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(star, {
          toValue: 0.6,
          duration: 1200,
          useNativeDriver: true

        }),
        Animated.timing(star, {
          toValue: 0.3,
          duration: 1200,
          useNativeDriver: true
        })
      ]),
      {
        iterations: 50
      }
    ).start()
  }, []);


  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 10,
      backgroundColor: colors.primary,

    }}>


      <Animated.Image source={require('../../assets/awan.png')} style={{
        width: 120,
        height: 90,
        transform: [
          { translateX: img },
          { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
        ],

      }} />


      <Animated.Image source={require('../../assets/bintang.png')} style={{
        width: 90,
        height: 90,
        position: 'absolute',
        right: 0,
        top: '30%',
        transform: [
          { scale: star },
          { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
        ],

      }} />
      <Text style={{
        fontFamily: fonts.primary[800],
        textAlign: 'center',
        fontSize: 60,
        color: colors.secondary,
        marginTop: 10,
        textShadowColor: colors.black,
        textShadowOffset: { width: -1, height: 5 },
        textShadowRadius: 10
      }}>DIPHYMO</Text>
      <Text style={{
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        fontSize: 25,
        color: colors.black,
        textShadowColor: colors.black,
        textShadowOffset: { width: -1, height: 0.5 },
        textShadowRadius: 5
      }}>DIGITAL PHYSICS{'\n'}MODULE</Text>
      <Text style={{
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        fontSize: 50,
        color: colors.success,
        textShadowColor: colors.black,
        textShadowOffset: { width: -1, height: 0.5 },
        textShadowRadius: 5
      }}>ENERGY</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{

        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: colors.white,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          opacity: 0.9,
          width: 120,
        }}>
          <Text style={{
            fontSize: 18,
            textAlign: 'center',
            fontFamily: fonts.secondary[800],
            color: colors.black

          }}>Let's Go</Text>
        </View>

      </TouchableOpacity>

      <View style={{
        flex: 1,
      }}>

      </View>
      <Image source={require('../../assets/kincir.gif')} style={{
        width: '100%',
        height: 300,
      }} />

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({});
