import React from "react";
import { Text,View,ScrollView,SafeAreaView,StyleSheet,Dimensions,Pressable,Alert,onPress } from "react-native";

const windowWidth = Dimensions.get('window').width;

const ApplyScreen = () =>{

    const [cardText, setCardText]=React.useState([
        'Process Associate',
        'Junior Developer',
        'DevOps Engineer',
        'Cloud Engineer',
        'Salesforce Developer',
        'FullStack Developer'
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Applied Roles</Text>
            <ScrollView>
                {
                    cardText.map((item,index) =>{
                        return(
                            <View key={index} style={styles.cardView}>
                                <Text style={styles.text}>{item}</Text>
                                <View style={styles.cardIn}>
                                    <Text>Experience</Text>
                                    <Pressable style={styles.button} onPress={() => Alert.alert('Your Application','In Process')}>
                                        <Text style={styles.bText}>View</Text>
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
    //         Applied Jobs
    //     </Text>
    // </View>
}
export default ApplyScreen;

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
        height:90,
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