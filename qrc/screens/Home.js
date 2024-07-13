import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../assets/bacground.jpeg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to QR Scanner</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Scanner')}
        >
          <Text style={styles.buttonText}> Click to Scan</Text>
        </TouchableOpacity>

        <View style={styles.devContainer}>
          <Text style={styles.devText}>Developed by pesala winodith</Text>
        </View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor:'#000'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  devContainer: {
    position: 'absolute',
    bottom: 20, // Adjust this value as needed
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  devText: {
    color: '#fff',
    fontSize: 14,
  },
});

// import { View, Button, StyleSheet } from 'react-native';

// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// export default function Home() {
//   const navigation = useNavigation();

//   return(
//     <view style={StyleSheet.container}>
//         <Button title='Scan' onPress={() => navigation.navigate('Scanner')} />
//     </view>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });