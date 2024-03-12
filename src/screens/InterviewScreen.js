import React from "react";
import { Text,View,SafeAreaView,ScrollView,StyleSheet,Dimensions,Pressable,onPress,Alert } from "react-native";

const windowWidth = Dimensions.get('window').width;

const InterviewScreen = () =>{
    const [cardText, setCardText]=React.useState([
        'Software Developer',
        'Junior Developer',
    ]);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Interview/Drives</Text>
            <ScrollView>
                {
                    cardText.map((item,index) =>{
                        return(
                            <View key={index} style={styles.cardView}>
                                <Text style={styles.text}>{item}</Text>
                                <View style={styles.cardIn}>
                                    <Text>Company</Text>
                                    <Pressable style={styles.button} onPress={() => Alert.alert('Interview Call Accepted','Please be On Time')}>
                                        <Text style={styles.bText}>Accept</Text>
                                    </Pressable>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
    // <View style={{flex: 1,alignItems: 'center',justifyContent:'center' }}>
    //     <Text>
    //         Interview For Jobs
    //     </Text>
    // </View>
}
export default InterviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    text:{
        fontSize:20,
        color:'#000080',
        fontWeight:'bold'
        
    },
    cardView:{
        height:80,
        width:windowWidth/1.2,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        backgroundColor:'#FFF',
        elevation:8,
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:1,
        shadowRadius:8,
        borderRadius:8,
        paddingHorizontal:16,
        marginHorizontal:16,
        margin:6
    },
    cardIn:{
        height:60,
        width:295,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button: {
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 8,
        backgroundColor: '#FFF',
      },
      bText: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000080',
      },
})