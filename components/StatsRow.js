import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default StatsRow = ({text, value}) => {
    return (
        <View style={{flexDirection: 'row', backgroundColor: '#404040', paddingHorizontal: 20}}>
            <Text style={styles.rowText}>{text}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}


// styles
const styles = StyleSheet.create({
    rowText: {
        flex: 1, 
        paddingVertical: 10, 
        fontWeight: '500', 
        fontSize: 15, 
        color: '#fff', 
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    value: {
        paddingVertical: 10, 
        color: '#fff', 
        borderBottomWidth: 1, 
        borderBottomColor: 'grey',
    }
});