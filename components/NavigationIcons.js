import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default NavigationIcons = () => {
    const nav = useNavigation();

    return (
        <View style={styles.iconsContainer}>
            <View style={{flex:1, alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => {nav.navigate('Settings')}}
                    style={{marginStart: -100}}>
                    <AntDesign name="setting" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => {nav.navigate('Statistics')}}
                    style={{marginStart: 100}}>
                    <Ionicons name="stats-chart" size={30} color="white" />
                </TouchableOpacity>
            </View>                
        </View>
    )
}


const styles = StyleSheet.create({
    iconsContainer: {
        flex: 1, 
        flexDirection: 'row', 
        paddingVertical: 15
    }
})