import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import SettingsScreen from './screens/SettingsScreen';
import StaticticsScreen from './screens/StaticticsScreen';
import { store, persistor } from './redux/store';


export default function App() {

  // create a state to check if the spash screen has been launched
  const [splashed, setSplashed] = useState(true);
  // create an instance of Stacknavigator
  const Stack = createStackNavigator();

  return (
    <>
      {/* <StatusBar style="auto" /> */}
      {/* Show a splash screen on the app launch */}
      {splashed && <SplashScreen setSplashed={setSplashed} />}
      {!splashed && 
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{
                    headerStyle:{
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                  }} >
                <Stack.Screen options={{headerShown: false}} name="Pomodoro"  component={PomodoroScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen}/>
                <Stack.Screen name="Statistics" component={StaticticsScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      }
    </>
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
