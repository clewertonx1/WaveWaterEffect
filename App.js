import * as React from 'react';
import {useEffect, useState, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Animated} from 'react-native';

export default function App() {

  const animatedValue = new Animated.Value(0)
  const animatedValueRef = useRef(animatedValue)

  const translateX = animatedValueRef.current.interpolate({
    inputRange: [ 0, 50],
    outputRange: [0, -50],
  })
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 50,
        duration: 1000,  
      }),
      Animated.delay(100),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,  
      }),
  
    ])
  ).start()
  
  
  return (
    <View style={styles.container}>
      
      <Animated.View style={{
         position: 'absolute',
         width: 400,
         height: 400,
         borderRadius: 200,
         backgroundColor: '#F5FCFF',
         zIndex: 2,
         bottom: 356,
         left: translateX,
      }}></Animated.View>
       <Animated.View style={{
        opacity: 0.5,
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: '#F5FCFF',
        zIndex: 3,
        bottom: 340,
        left: translateX,
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