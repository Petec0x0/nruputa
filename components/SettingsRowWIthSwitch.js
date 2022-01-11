import React, {useState} from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native'


export default SettingsRowWithSwitch = ({text, longBreakEnabled, updateSettings, settingsKey}) => {
    const toggleSwitch = () => {
        const keyValuePair = {};
        keyValuePair[settingsKey] = !longBreakEnabled;
        updateSettings(keyValuePair);
    }
    return (
        <View style={{flexDirection: 'row', backgroundColor: '#404040', paddingHorizontal: 20}}>
            <Text style={styles.rowText}>{text}</Text>
            <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "green" }}
                    thumbColor={longBreakEnabled ? "#fff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={longBreakEnabled}
                />
        </View>
    )
}


// styles

const styles = StyleSheet.create({
    rowText: {
        flex: 5, 
        paddingVertical: 10, 
        fontWeight:'bold', 
        fontSize: 15, 
        color: '#fff', 
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    switch: {
        flex: 1, 
        borderBottomWidth: 1, 
        borderBottomColor: 'grey'
    }
});