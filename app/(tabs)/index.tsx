import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { HomePage } from '@/components/Home/HomePage';

export default function PopularTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
