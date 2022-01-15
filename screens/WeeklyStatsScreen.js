import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { BarChart } from 'react-native-chart-kit';
import RowHeader from '../components/RowHeader';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const lastSevenDaysData = (statistics) => {
    const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    // Get statistics object keys
    const seven_days_string = Object.keys(statistics).slice(-7);
    // convert days_string to days of the week
    const lastSevenDaysDataLabels = seven_days_string.map(day_string => {
      let seperated_day_string = day_string.split(' ');
      let date_obj = new Date(seperated_day_string[0], seperated_day_string[1], seperated_day_string[2]);
      // return labels based on the day of the week
      return labels[date_obj.getDay()];
    } )
    // Get the Pomodoro time only for the last seven days
    const lastSevenDaysPomodoro = seven_days_string.map(day_string => {
      return statistics[day_string].pomodoros;
    })
    // return data
    return {labels: lastSevenDaysDataLabels, datasets: [{data: lastSevenDaysPomodoro}]}
  }

export default WeeklyStatsScreen = () => {
  // Get statistics data from state
  const statistics = useSelector((state) => state.statistics);
  const data = lastSevenDaysData(statistics);

    return (
        <View style={styles.container}>
            <RowHeader text="JAN 11-JAN 18, 2022" />
            <View style={{backgroundColor: '#404040', paddingHorizontal: 10, paddingVertical: 10}}>
                <Text style={{alignSelf: 'center', color: '#cfcccc', marginBottom: 10, fontWeight: 'bold'}}>FOCUS SESSIONS</Text>
                <BarChart
                    data={data}
                    width={screenWidth-20}
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    fromZero={true}
                />
            </View>
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