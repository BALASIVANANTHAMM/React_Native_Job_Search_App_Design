import React from "react";
import { Text,View,SafeAreaView,ScrollView,StyleSheet,Dimensions,Pressable,onPress,TextInput,onClick,FlatList,Button,Alert,Modal } from "react-native";


const windowWidth = Dimensions.get('window').width;

const RoleScreen = () =>{
//     const [showDialog, setShowDialog] = React.useState(false);

//     const toggleDialog = () => {
//     setShowDialog(!showDialog);
//   };

    const [search, setSearch] = React.useState('');

    const cardText=[
        'Software Developer',
        'Process Associate',
        'Junior Developer',
        'DevOps Engineer',
        'Cloud Engineer',
        'Salesforce Developer',
        'FullStack Developer',
        'Management Trainee',
        'Xamarian Deveoper',
        'Digital Marketing',
        'Social Media Marketing',
        'Process Engineer',
    ];

    const filRoles = cardText.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );
  function handleClick() {
    alert('You clicked me!');
  }

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Roles</Text>
        <TextInput
            style={styles.input}
            placeholder="Search Here..."
            onChangeText={(txt)=>setSearch(txt)}
            value={search}
        />
        <ScrollView>
                {
                    cardText.map((item,index) =>{
                        return(
                            <FlatList
                                data={filRoles}
                                scrollEnabled={false}
                                renderItem={({ item,index }) => (
                                    <View key={index} style={styles.cardView}>
                                    <Text style={styles.text}>{item}</Text>
                                    <Text>Company</Text>
                                        <View style={styles.cardIn}>
                                            <Text>Experience</Text>
                                            <Pressable style={styles.button} onPress={() => Alert.alert('Role','Applied Successfully')}>
                                                <Text style={styles.bText}>Apply</Text>
                                            </Pressable>
                                            {/* <Modal
                                                visible={showDialog}
                                                transparent={true}
                                                animationType="slide"
                                            >
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                                                        <Text>This is your dialog content.</Text>
                                                        <Button title="Close" onPress={toggleDialog} />
                                                    </View>
                                                </View>
                                            </Modal> */}
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item,index) => index}
      />
                            // <View key={index} style={styles.cardView}>
                            //     <Text style={styles.text}>{item}</Text>
                            //     <Text>Company</Text>
                            //     <View style={styles.cardIn}>
                            //         <Text>Experience</Text>
                            //         <Pressable style={styles.button} onPress={onPress}>
                            //             <Text style={styles.bText}>Apply</Text>
                            //         </Pressable>
                            //     </View>
                            // </View>
                        );
                    })
                }
            </ScrollView>
    </SafeAreaView>);
    // <View style={{flex: 1,alignItems: 'center',justifyContent:'center' }}>
    //     <Text>
    //         Roles
    //     </Text>
    // </View>
}
export default RoleScreen;

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
      input: {
        marginLeft: 20,
        marginRight:20,
        padding:10,
        width:'80%',
        height:50,
        fontSize:20,
        borderRadius:15,
        backgroundColor:'#d9dbda'
      },
})