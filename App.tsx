import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AddForm from './src/component/AddForm';
import { Provider } from 'react-redux';


export default function App() {
  return (

    <View style={styles.container}>
      <AddForm></AddForm>
      <StatusBar style="auto" />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
  },
});
