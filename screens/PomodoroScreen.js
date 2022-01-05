import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import {vibrate} from '../utils';

const updateTimer = ({ remainingTime, animatedColor }) => {
    /*
        The updateTimer function is passed as a child
        to CountdownCircleTimer every second and returns the reamaing time.    
    */ 
    if (remainingTime === 0) {
        // causes phone to vibrate
        vibrate();
        return <Text style={{color: '#fff'}}>Well done...</Text>;
    }
    return (
        <Animated.Text style={{ color: animatedColor, fontSize: 70 }}>
            {`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`}
        </Animated.Text>
    );
}

export default function PomodoroScreen(props) {
    const nav = props.navigation;
    // The useState hook for managing and updating the CountdownCircleTimer props
    const [countdownTimer, setCountdownTimer] = useState({
        key: 0,
        isPlaying: false,
        duration: (25),
        onComplete: () => [false, 1000]
    });

    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 15}}>
                <View style={{flex:1, alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => {nav.navigate('Settings')}}
                        style={{marginStart: -100}}>
                        <AntDesign name="setting" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => {nav.navigate('Statistics')}}
                        style={{marginStart: 100}}>
                        <Ionicons name="stats-chart" size={30} color="white" />
                    </TouchableOpacity>
                </View>                
            </View>
            <View style={{flex: 1, alignItems: 'center',}}>
                <Text style={{color: '#fff', fontSize: 20}}>STAY FOCUSED</Text>
            </View>
            <View style={{flex: 5, alignItems: 'center'}}>
                <CountdownCircleTimer
                        key={countdownTimer.key}
                        isPlaying={countdownTimer.isPlaying}
                        duration={countdownTimer.duration}
                        size={280}
                        colors={[
                        ['#004777', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                        ]}
                        onComplete={countdownTimer.onComplete}
                    >
                    {updateTimer}
                </CountdownCircleTimer>

                <TouchableOpacity 
                    style={styles.startPomodoroBtn}
                    onPress={() => {
                        // Using tenary operator to update and RESET the timer when a user clicks the button
                        (countdownTimer.isPlaying) ? setCountdownTimer({...countdownTimer,
                            isPlaying: !countdownTimer.isPlaying, 
                            key: countdownTimer.key + 1,
                        }) : '';
                        // Start the timer if it is not playing already
                        (!countdownTimer.isPlaying) ? setCountdownTimer({...countdownTimer, isPlaying: !countdownTimer.isPlaying}) : '';
                    }}
                    >
                    <Text style={{color: '#fff'}}>{!countdownTimer.isPlaying ? 'START POMODORO' : 'RESET'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 30
    },
    startPomodoroBtn: {
        marginTop: 50,
        paddingHorizontal: 25,
        paddingVertical: 12,
        backgroundColor: '#A30000',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#CE3907',
    }
  });