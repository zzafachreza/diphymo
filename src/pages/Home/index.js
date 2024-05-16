import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Home({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    email: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});

  const card = new Animated.Value(-30);
  const img = new Animated.Value(-20);





  useEffect(() => {
    Animated.timing(card, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    }).start();
    Animated.timing(img, {
      toValue: 0,
      duration: 850,
      useNativeDriver: false,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white

    }}>

      <Image source={require('../../assets/awan.png')} style={{
        width: 100,
        height: 80,
        position: 'absolute',
        right: 0,
      }} />

      <ScrollView style={{ position: "relative" }}>


        <Animated.View style={{
          padding: 10, margin: 10,
          bottom: card,
          borderRadius: 0,

        }}>

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


        </Animated.View>
        <View style={{
          marginTop: '10%',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('States', {
            menu: 'Materi'
          })} style={{
            padding: 10,
            backgroundColor: colors.primary,
            width: windowWidth / 2.5,
            height: windowWidth / 2.5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/m1.png')} style={{
              width: '75%',
              height: '75%'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[800],
              fontSize: 20,
              color: colors.white
            }}>Materi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('States', {
            menu: 'LKPD'
          })} style={{
            padding: 10,
            backgroundColor: colors.primary,
            width: windowWidth / 2.5,
            height: windowWidth / 2.5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/m2.png')} style={{
              width: '75%',
              height: '75%'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[800],
              fontSize: 20,
              color: colors.white
            }}>LKPD</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: '10%',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Video', {
            menu: 'Fenomena'
          })} style={{
            padding: 10,
            backgroundColor: colors.primary,
            width: windowWidth / 2.5,
            height: windowWidth / 2.5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/m3.png')} style={{
              width: '75%',
              height: '75%'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[800],
              fontSize: 20,
              color: colors.white
            }}>Fenomena</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('States', {
            menu: 'RPP'
          })} style={{
            padding: 10,
            backgroundColor: colors.primary,
            width: windowWidth / 2.5,
            height: windowWidth / 2.5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/m4.png')} style={{
              width: '75%',
              height: '75%'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[800],
              fontSize: 20,
              color: colors.white
            }}>RPP</Text>
          </TouchableOpacity>
        </View>





        {loading && <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>}

      </ScrollView>
      <Text style={{
        fontFamily: fonts.secondary[400],
        textAlign: 'center',
        fontSize: 14,
        color: colors.black,
        marginBottom: 10,
      }}>Copyright © 2024 | Digital Physics Module</Text>
    </View>




  );
}

const styles = StyleSheet.create({});
