import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function SplashScreen({setSplashed}) {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeTextView}>
                <Text style={styles.welcomeText}>Enjoy making plans and stay focused!</Text>
            </View>
            <View style={{flex: 1, marginTop: 20}}>
                <TouchableHighlight onPress={() => {setSplashed(false)}}>
                    <View style={styles.welcomeButtonView}>
                        <AntDesign name="arrowright" size={24} color="white" style={{margin: 15}} />
                    </View>
                </TouchableHighlight>
            </View>
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingHorizontal: 10
    },
    welcomeTextView: {
        flex: 1,
        justifyContent: "flex-end",
    },
    welcomeText: {
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign:'center', 
        color: "#fff"
    },
    welcomeButtonView: {
        backgroundColor: "#068455", 
        borderRadius:100,
        borderWidth: 1,
        borderColor: '#068455',
        overflow: "hidden"
    }
  });
  