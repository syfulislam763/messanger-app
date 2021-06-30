import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Home from './src/components/Home';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.chatHeader}>Chats</Text>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
  },
  chatHeader: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'black',
    padding: 20,
    width: '100%',
  },
});

export default App;
