import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

const isAndriod = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flexDirection: 'column', flex: 1, marginTop: StatusBar.currentHeight }}>

        <View style={{ backgroundColor: 'green', padding: 15 }}>
          <Text>Search </Text>
        </View>
        <View style={{ flexGrow: 1, backgroundColor: 'blue', padding: 15 }}>
          <Text>Body</Text>
        </View>
        {/* <Text>Testing empty Space </Text> */}

      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({

});
