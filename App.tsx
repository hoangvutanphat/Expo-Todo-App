import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AddForm from './src/component/AddForm';
import { Provider } from 'react-redux';
import { store } from './src/app/store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddForm></AddForm>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
  },
});
