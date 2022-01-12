import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DailyStatsScreen from './DailyStatsScreen';
import WeeklyStatsScreen from './WeeklyStatsScreen';
import MonthlyStatsScreen from './MonthlyStatsScreen';


const Tab = createMaterialTopTabNavigator();


export default StaticticsScreen = () => {
    return (
        <Tab.Navigator
            style={{backgroundColor: '#000'}}
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarLabelStyle: {
                     fontSize: 12, 
                },
                tabBarStyle: { 
                    backgroundColor: '#404040',
                    borderRadius: 50,
                    marginHorizontal: 20
                },
                tabBarIndicatorStyle: { 
                    backgroundColor: '#068455', 
                    height: '100%', 
                    borderRadius: 50 
                }
            }}
        >
            <Tab.Screen name="Day" component={DailyStatsScreen} />
            <Tab.Screen name="Week" component={WeeklyStatsScreen} />
            <Tab.Screen name="Month" component={MonthlyStatsScreen} />
        </Tab.Navigator>
    )
}
