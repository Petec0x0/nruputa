import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ModalSelector from 'react-native-modal-selector';


export default SettingsRow = ({text, data, unit, selectedKey, updateSettings, settingsKey}) => {
    return (
        <View style={{flexDirection: 'row', backgroundColor: '#404040', paddingHorizontal: 20}}>
            <Text style={styles.rowText}>{text}</Text>
            <ModalSelector
                style={styles.modalSelector}
                selectTextStyle={{color: '#fff'}}
                selectStyle={{borderWidth: 0, borderBottomWidth: 1}}
                selectedKey={selectedKey}
                data={data}
                onChange={(option) => {
                    const keyValuePair = {};
                    keyValuePair[settingsKey] = option.key;
                    updateSettings(keyValuePair)
                }} 
                cancelText="Close"
            />
            <Text style={styles.unitText}>{unit} </Text>
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
    modalSelector: {
        alignItems: 'flex-end', 
        color: '#fff', 
        borderBottomWidth: 1, 
        borderBottomColor: 'grey'
    },
    unitText: {
        paddingVertical: 10, 
        color: '#fff', 
        textAlign: 'right', 
        borderBottomWidth: 1, 
        borderBottomColor: 'grey'
    }
});