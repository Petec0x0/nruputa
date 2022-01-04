import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 



export default function PomodoroScreen() {
    const [isPlaying, setPlaying] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 15}}>
                <AntDesign name="setting" size={24} color="white" style={{flex:1, marginStart: 20}} />
                <Ionicons name="stats-chart" size={24} color="white" style={{flex:1, marginEnd: -250}} />
            </View>
            <View style={{flex: 1, alignItems: 'center',}}>
                <Text style={{color: '#fff', fontSize: 20}}>STAY FOCUSED</Text>
            </View>
            <View style={{flex: 5, alignItems: 'center'}}>
                <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={25*60}
                        size={280}
                        colors={[
                        ['#004777', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                        ]}
                        onComplete={() => [true]}
                    >
                    {({ remainingTime, animatedColor }) => (
                        <Animated.Text style={{ color: animatedColor, fontSize: 70 }}>
                        {`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`}
                        </Animated.Text>
                    )}
                </CountdownCircleTimer>

                <TouchableOpacity 
                    style={styles.startPomodoroBtn}
                    onPress={() => {setPlaying(!isPlaying)}}
                    >
                    <Text style={{color: '#fff'}}>START POMODORO</Text>
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