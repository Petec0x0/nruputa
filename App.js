import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import SettingsScreen from './screens/SettingsScreen';
import StaticticsScreen from './screens/StaticticsScreen';
import reducer from './reducers/reducer';

// create store "redux" for state management
const store = createStore(reducer);

export default function App() {
  // The useState hook for managing and updating the CountdownCircleTimer props
  const [countdownTimer, setCountdownTimer] = useState({
      key: 0,
      isPlaying: false,
      duration: (25),
      onComplete: () => [false, 1000]
  });

  // create a state to check if the spash screen has been launched
  const [splashed, setSplashed] = useState(true);
  // create an instance of Stacknavigator
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      {/* Show a splash screen on the app launch */}
      {splashed && <SplashScreen setSplashed={setSplashed} />}
      {!splashed && 
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen options={{headerShown: false}} name="Pomodoro">
                {props => <PomodoroScreen {...props} 
                            countdownTimer={countdownTimer} 
                            setCountdownTimer={setCountdownTimer}
                          />
                }
              </Stack.Screen>
              <Stack.Screen name="Settings">
                {props => <SettingsScreen {...props} countdownTimer={countdownTimer} setCountdownTimer={setCountdownTimer} />}
              </Stack.Screen>
              <Stack.Screen name="Statistics">
                {props => <StaticticsScreen {...props} countdownTimer={countdownTimer} setCountdownTimer={setCountdownTimer} />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
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
