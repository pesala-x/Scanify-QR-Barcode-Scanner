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

import { View, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <Button title='Scan' onPress={() => navigation.navigate('Scanner')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
