import React from 'react';
import { View, Text } from 'react-native';

export default Message = ({message}) => {
    return (
        <View style={{flex: 1, alignItems: 'center',}}>
            <Text style={{color: '#fff', fontSize: 20}}>{message}</Text>
        </View>
    )
}
