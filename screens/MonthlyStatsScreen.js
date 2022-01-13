import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import RowHeader from '../components/RowHeader';

const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["wk1", "wk2", "wk3", "wk4"],
    datasets: [
      {
        data: [30, 25, 28, 50]
      }
    ]
  };

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
    return (
        <View style={styles.container}>
            <RowHeader text="JANUARY 2022" />
            <View style={{backgroundColor: '#404040', paddingHorizontal: 10, paddingVertical: 10}}>
                <Text style={{alignSelf: 'center', color: '#cfcccc', marginBottom: 10, fontWeight: 'bold'}}>FOCUS SESSIONS</Text>
                <BarChart
                    style={{}}
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