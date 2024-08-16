import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../assets/bacground.jpeg')} 
      style={styles.background}
    >
    
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Icon name="person" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserPlace')}>
          <Icon name="place" size={24} color="#000" />
        </TouchableOpacity>
        { <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Icon name="settings" size={24} color="#000" />
        </TouchableOpacity> }
      </View>

      <View style={styles.container}>
        <Text style={styles.header}>Scan QR & Barcodes</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Scanner')}
        >
          <Text style={styles.buttonText}> Click to Scan</Text>
        </TouchableOpacity>

        <View style={styles.devContainer}>
          <Text style={styles.devText}>Developed by Pesala Winodith</Text>
          <Text style={styles.devText2}>licenced under the MIT</Text>
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
    backgroundColor: '#316FF6',
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
  devText2: {
    color: '#fff',
    fontSize: 11,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    paddingHorizontal:10,
    backgroundColor: '#316FF6',
    borderRadius: 5,
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
