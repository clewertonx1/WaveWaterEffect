import * as React from 'react';
import {useEffect, useState, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Animated} from 'react-native';

export default function App() {

  const backWaveValue = new Animated.Value(0)
  const backWaveRef = useRef(backWaveValue)
  const backWavePos = backWaveRef.current.interpolate({
    inputRange: [ 0, 1, 2 ],
    outputRange: [3, 0, -3],
    
  })

  Animated.loop(
    Animated.sequence([
      Animated.timing(backWaveValue, {
        toValue: 2,
        duration: 1000,  
      }),
      Animated.delay(100),
      Animated.timing(backWaveValue, {
        toValue: 0,
        duration: 1000,  
      }),
  
    ])
  ).start()

  const frontWaveValue = new Animated.Value(0)
  const frontWaveRef = useRef(frontWaveValue)
  const frontWavePos = frontWaveRef.current.interpolate({
    inputRange: [ 0, 1, 2 ],
    outputRange: [-5, 0, 5],
  
  })

  Animated.loop(
    Animated.sequence([
      Animated.timing(frontWaveValue, {
        toValue: 2,
        duration: 1000,  
      }),
      Animated.delay(100),
      Animated.timing(frontWaveValue, {
        toValue: 0,
        duration: 1000,  
      }),
  
    ])
  ).start()


  
  
  
  return (
    <View style={styles.container}>
      
      <Animated.View style={{
        backgroundColor: 'red',
         position: 'absolute',
         width: 400,
         height: 400,
         borderRadius: 200,
         backgroundColor: '#F5FCFF',
         zIndex: 2,
         bottom: 356,
         left: backWavePos,
      }}></Animated.View>
       <Animated.View style={{
        backgroundColor: 'red',
        opacity: 0.5,
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: '#F5FCFF',
        zIndex: 3,
        bottom: 340,
        left: frontWavePos,
     }}></Animated.View>
      
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