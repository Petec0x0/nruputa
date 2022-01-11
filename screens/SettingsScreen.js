import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SettingsRow from '../components/SettingsRow';
import SettingsRowWithSwitch from '../components/SettingsRowWIthSwitch'
import RowHeader from '../components/RowHeader';
import WorkingSessionRow from '../components/WorkingSessionRow';
import { updateSettings } from '../redux/actions';

const SettingsScreen = ({settings, updateSettings}) => {
    // Different options for Pomodoro time a user can select from
    const pomodoroTime = [
        { key: 0, section: true, label: 'Pomodoro Time' },
        { key: 20, label: '20', accessibilityLabel: 'Tap here for 20 minutes' },
        { key: 25, label: '25', accessibilityLabel: 'Tap here for 25 minutes' },
        { key: 30, label: '30', accessibilityLabel: 'Tap here for 30 minutes' }
    ];
    // Different options for Short Break time a user can select from
    const shortBreak = [
        { key: 0, section: true, label: 'Short Break' },
        { key: 5, label: '5', accessibilityLabel: 'Tap here for 5 minutes' },
        { key: 10, label: '10', accessibilityLabel: 'Tap here for 10 minutes' },
    ];
    // Different options for Long Break Length a user can select from
    const longBreakLength = [
        { key: 0, section: true, label: 'Long Break Length' },
        { key: 15, label: '15', accessibilityLabel: 'Tap here for 15 minutes' },
        { key: 20, label: '20', accessibilityLabel: 'Tap here for 20 minutes' },
        { key: 25, label: '25', accessibilityLabel: 'Tap here for 25 minutes' },
        { key: 30, label: '30', accessibilityLabel: 'Tap here for 30 minutes' }
    ];
    // Different options for Long Break After sessions a user can select from
    const longBreakAfter = [
        { key: 0, section: true, label: 'Long Break After' },
        { key: 3, label: '3', accessibilityLabel: 'Tap here for 3 minutes' },
        { key: 4, label: '4', accessibilityLabel: 'Tap here for 4 minutes' },
        { key: 5, label: '5', accessibilityLabel: 'Tap here for 5 minutes' },
        { key: 6, label: '6', accessibilityLabel: 'Tap here for 6 minutes' }
    ];

    return (
        <View style={styles.container}>
            <RowHeader text="TIMERS" />
            <SettingsRow 
                text="Pomodoro" 
                data={pomodoroTime} 
                selectedKey={settings.pomodoroTime} 
                unit="Min"
                settingsKey="pomodoroTime" 
                updateSettings={updateSettings}
            />
            <SettingsRow 
                text="Short Break" 
                data={shortBreak} 
                selectedKey={settings.breakTime} 
                unit="Min" 
                settingsKey="breakTime" 
                updateSettings={updateSettings}
            />

            <RowHeader text="LONG BREAK" />
            <SettingsRowWithSwitch 
                text="Long Break" 
                longBreakEnabled={settings.longBreak}
                settingsKey="longBreak" 
                updateSettings={updateSettings} 
            />
            <SettingsRow 
                text="Long Break Length" 
                data={longBreakLength} 
                selectedKey={settings.longBreakLength} 
                unit="Min" 
                settingsKey="longBreakLength" 
                updateSettings={updateSettings}
            />
            <WorkingSessionRow 
                text="Long Break After" 
                data={longBreakAfter} 
                selectedKey={settings.longBreakAfter} 
                unit="Working Sessions" 
                settingsKey="longBreakAfter" 
                updateSettings={updateSettings}
            />
        </View>
    )
}

mapStateToProps = (state) => ({
    settings: state.settings
})

mapDispatchToProps = (dispatch) => ({
    updateSettings: (keyValuePair) => dispatch(updateSettings(keyValuePair)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'column',
      },
});