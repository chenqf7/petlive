import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>宠生</Text>
      <Text style={styles.subtitle}>手机 App 高保真原型启动中</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F4EA',
    padding: 24
  },
  title: {
    color: '#1C2A28',
    fontSize: 34,
    fontWeight: '800'
  },
  subtitle: {
    color: '#5C6F69',
    fontSize: 16,
    marginTop: 8
  }
});
