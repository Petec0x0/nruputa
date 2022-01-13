import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default RowHeader = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

// styles
const styles = StyleSheet.create({
    text: {
        color: '#fff', 
        paddingHorizontal: 20,
        marginTop: 15,
        paddingBottom: 4,
        fontSize: 12
    }
});