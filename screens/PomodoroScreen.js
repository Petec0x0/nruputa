import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Vibration } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { resetTimer, switchSession } from '../redux/actions';
import NavigationIcons from '../components/NavigationIcons';
import Message from '../components/Message';

const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS
  ];

const returnRemainingTime = ({ remainingTime }) => {
    /*
        The updateTimer function is passed as a child
        to CountdownCircleTimer and called every second and returns the reamaing time.    
    */ 
    if (remainingTime === 0) {
        // causes phone to vibrate
        Vibration.vibrate(PATTERN);
        return <Text style={{color: '#fff'}}>Well done...</Text>;
    }
    return (
        <Animated.Text style={{ color: '#fff', fontSize: 70 }}>
            {`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`}
        </Animated.Text>
    );
}

const PomodoroScreen = ({appState, updateTimer, switchSession}) => {
    return (
        <View style={styles.container}>
            <NavigationIcons />
            <Message message={appState.message} />

            <View style={{flex: 5, alignItems: 'center'}}>
                <CountdownCircleTimer
                        key={appState.countdownTimer.key}
                        isPlaying={appState.countdownTimer.isPlaying}
                        duration={appState.countdownTimer.duration}
                        size={280}
                        colors="#464343"
                        trailColor="#068455"
                        onComplete={() => {
                            updateTimer({...appState.countdownTimer});
                            switchSession({});
                            return [false, 1000];
                        }}
                    >
                    {returnRemainingTime}
                </CountdownCircleTimer>

                <TouchableOpacity 
                    style={styles.startPomodoroBtn}
                    onPress={() => {
                        updateTimer({...appState.countdownTimer})
                    }}
                    >
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        {!appState.countdownTimer.isPlaying ? appState.buttonText : 'RESET'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    appState: state
})

const mapDispatchToProps = (dispatch) => ({
    updateTimer: (countdownTimer) => dispatch(resetTimer(countdownTimer)),
    switchSession: (data) => dispatch(switchSession(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroScreen);


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
        backgroundColor: '#068455'
    }
  });