import React from 'react';
import { View, StyleSheet } from 'react-native';
import RowHeader from '../components/RowHeader';
import StatsRow from '../components/StatsRow';

export default DailyStatsScreen = () => {
    return (
        <View style={styles.container}>
            <RowHeader text="TIMERS" />
            <StatsRow text="Pomodoro" value={16} />
            <StatsRow text="Short Break" value={5} />
            <StatsRow text="Long Break" value={1} />
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