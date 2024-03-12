import React from "react";
import { Text,View,SafeAreaView,ScrollView,StyleSheet,Dimensions,Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () =>{
    const [cardText, setCardText]=React.useState([
        'Applied Jobs',
        'Evaluation Process',
        'On Hold',
        'Rejected',
        'Offer Received',
        'Offer Accepted',
        'Offer Declined'
    ]);
    return (                               
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <Text>Welcome To Dashboard</Text>
            <ScrollView>   
                {
                    cardText.map((item,index) =>{
                        return(
                            <View key={index} style={styles.cardView}>
                                <Text style={styles.text}>{item}</Text>
                                <Text style={{marginTop:40,marginLeft:120}}>Process</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
    // <View style={{flex: 1,alignItems: 'center',justifyContent:'center' }}>
    //     <Text>
    //         Dashboard
    //     </Text>
    // </View>
}
export default HomeScreen;

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
        height:150,
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
    otherText:{
        justifyContent:'center',
        textAlign:'center'
    }
})