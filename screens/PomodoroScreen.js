import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import {vibrate} from '../utils';


export default  memo(function PomodoroScreen({navigation, countdownTimer, setCountdownTimer}) {
    const [buttonText, setButtonText] = useState('START POMODORO');
    const [message, setMessage] = useState('STAY FOCUSED');

    const nav = navigation;
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
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
                <Text style={{color: '#fff', fontSize: 20}}>{message}</Text>
            </View>
            <View style={{flex: 5, alignItems: 'center'}}>
                <CountdownCircleTimer
                        key={countdownTimer.key}
                        isPlaying={countdownTimer.isPlaying}
                        duration={countdownTimer.duration}
                        size={280}
                        colors="#464343"
                        trailColor="#068455"
                        onComplete={countdownTimer.onComplete}
                    >
                    {({ remainingTime, animatedColor }) => {
                        /*
                            The updateTimer function is passed as a child
                            to CountdownCircleTimer and called every second and returns the reamaing time.    
                        */ 
                        if (remainingTime === 0) {
                            // causes phone to vibrate
                            vibrate();
                            console.log(countdownTimer.isPlaying);

                            // Update the button text and the screen message
                            setButtonText('TAKE A BREAK');
                            setMessage('RELAX');

                            return <Text style={{color: '#fff'}}>Well done...</Text>;
                        }
                        return (
                            <Animated.Text style={{ color: '#fff', fontSize: 70 }}>
                                {`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`}
                            </Animated.Text>
                        );
                    }}
                </CountdownCircleTimer>

                <TouchableOpacity 
                    style={[styles.startPomodoroBtn, {backgroundColor: '#068455',}]}
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
                    <Text style={{color: '#fff'}}>{!countdownTimer.isPlaying ? buttonText : 'RESET'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
})


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
        borderRadius: 50,
        borderWidth: 1,
    },
    iconsContainer: {
        flex: 1, 
        flexDirection: 'row', 
        paddingVertical: 15
    }
  });