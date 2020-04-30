import * as React from 'react';
import {useEffect, useState, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Animated} from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {

  const animatedValue = new Animated.Value(0)
  const animatedValueRef = useRef(animatedValue)

  const translateX = animatedValueRef.current.interpolate({
    inputRange: [ 0, 1],
    outputRange: [100, 200],
  })
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,  
      }),
      Animated.delay(1000),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 100,  
      }),
  
    ])
  ).start()

  
  console.log(translateX)
  return (
    <View style={styles.container}>
      <View style={{
         position: 'absolute',
         width: 400,
         height: 400,
         borderRadius: 200,
         backgroundColor: '#F5FCFF',
         zIndex: 2,
         bottom: 330,
         left: 13,
      }}></View>
       <View style={{
        opacity: 0.5,
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: '#F5FCFF',
        zIndex: 3,
        bottom: 320,
        left: -13,
     }}></View>
      
      <View style={styles.borderCircle}>
      <View style={styles.circle}>
        <View style={styles.wave}></View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  circle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    
    width: 200,
    height: 200,
    backgroundColor: "#4973ff",
    borderRadius: 200,

  },
  borderCircle: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: '#4973ff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});