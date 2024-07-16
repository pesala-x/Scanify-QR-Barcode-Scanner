import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export default function LoadingScreen({ navigation }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      navigation.replace('Home'); // Navigate to Home screen after loading
    }, 3000); // Adjust the duration as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('../assets/loader.json')} // Add your loader JSON file in the assets folder
        animationStyle={styles.lottie}
        speed={1}
      />
      <Text style={styles.loadingText}>Pesala-X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
});
