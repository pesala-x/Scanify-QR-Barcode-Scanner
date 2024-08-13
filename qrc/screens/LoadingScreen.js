// import React, { useRef, useEffect, useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import AnimatedLoader from 'react-native-animated-loader';
// import LottieView from 'lottie-react-native';


// export default function LoadingScreen({ navigation }) {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     setTimeout(() => { 
//       setVisible(false);
//       // navigation.replace('Home'); // Navigate to Home screen after loading
//     }, 5000); // Adjust the duration as needed
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//     <LottieView style={styles.lottie}
//      source={require('../assets/blackShoe.json')} autoPlay loop />
//       { <AnimatedLoader
//         visible={visible}
//         overlayColor="rgba(255,255,255,0.75)"    
//         source={require('../assets/Animation - 1721112760415.json')} // Add your loader JSON file in the assets folder
//         animationStyle={styles.lottie}
//         speed={1}
//       />
    
//       }


//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   lottie: {
//     width: 400,
//     height: 400,
//   },
//   loadingText: {
//     marginTop: 20,
//     fontSize: 18,
//     color: '#fff',
//   },
// });
