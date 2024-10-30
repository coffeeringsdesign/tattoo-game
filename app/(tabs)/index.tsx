import { Image, StyleSheet, View, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {

  return (
    <View style={styles.mainContainer}>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Section 1</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Section 2</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Section 3</ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
   backgroundColor: 'blue',
   alignItems: 'stretch',
   alignContent: 'stretch',
   height: '100%',
  },
  stepContainer: {
    flexGrow: 1,
    gap: 8,
    marginBottom: 8,
  },
  topContainer: {
    marginTop: 50,
  }
});
