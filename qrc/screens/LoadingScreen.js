import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar,Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function LoadingScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); // Navigate to Home screen after loading
    }, 5000); // Adjust the duration as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style= {styles.welcome}>
        <LottieView
          source={require('../assets/animations/Animation - 1721140587874.json')} // Ensure this path is correct
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
        <Text style={styles.text}>PESALA-X</Text>
        <Text style={styles.text2}> @open source corporation limited</Text>
        <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color during loading
    paddingVertical: 100
  },
  text:{
    fontSize: 30,
    paddingBottom:0
  },
  text2:{
    fontSize: 15
  },
  welcome: {
    width: 300, // Adjust size as needed
    aspectRatio:1
  },
  animation:{
    flex: 1
  }
});
