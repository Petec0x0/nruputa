import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import RowHeader from '../components/RowHeader';
import StatsRow from '../components/StatsRow';

export default DailyStatsScreen = () => {
    // get today's date which which is used as 
    // key for storing stats for each day
    const today = `${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`;
    const statistics = useSelector((state) => state.statistics[today])
    const pomodoros = (statistics && statistics.pomodoros) ? statistics.pomodoros : 0;
    const shortBreaks = (statistics && statistics.shortBreaks) ? statistics.shortBreaks : 0;
    const longBreaks = (statistics && statistics.longBreaks) ? statistics.longBreaks : 0;
    return (
        <View style={styles.container}>
            <RowHeader text="TIMERS" />
            <StatsRow text="Pomodoro" value={pomodoros} />
            <StatsRow text="Short Break" value={shortBreaks} />
            <StatsRow text="Long Break" value={longBreaks} />
        </View>
    )
}


// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'column',
    },
});