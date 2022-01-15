import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { LineChart } from 'react-native-chart-kit';
import RowHeader from '../components/RowHeader';

const screenWidth = Dimensions.get("window").width;

const lastOneMonthData = (statistics) => {
  // Get statistics object keys
  const one_month_string = Object.keys(statistics).slice(-30);
  const lastOneMonthPomodoro = one_month_string.map(day_string => {
    return statistics[day_string].pomodoros;
  });
  // return data
  return {labels: [], datasets: [{data: lastOneMonthPomodoro}]}
}

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

export default MonthlyStatsScreen = () => {
    // Get statistics data from state
  const statistics = useSelector((state) => state.statistics);
  const data = lastOneMonthData(statistics);

    return (
        <View style={styles.container}>
            <RowHeader text="JANUARY 2022" />
            <View style={{backgroundColor: '#404040', paddingHorizontal: 10, paddingVertical: 10}}>
                <Text style={{alignSelf: 'center', color: '#cfcccc', marginBottom: 10, fontWeight: 'bold'}}>FOCUS SESSIONS</Text>
                <LineChart
                    style={{}}
                    data={data}
                    width={screenWidth-20}
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    bezier
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