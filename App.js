import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';



//Main App Function
const App = () => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <ScrollView>
                <Text style={styles.smallText}>Your Number One Utility Payment Platform In Africa! </Text>
                <View style={styles.imageContainer}>
                    <Image source={require('./assets/images/logo.png')} title="Splash Image" style={styles.image}/>
                </View>
                <View style={styles.buttonContainer}>
                     <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Let's Get You Started</Text>
                     </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}




//CSS Styling Of The App
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
    text: {
        color: '#595959',
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
    smallText: {
        color: '#595959',
        fontSize: 20,
        margin: 40,
        textAlign: 'center'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        borderRadius: 100 / 2,
        padding: 30,
        width: 250,
        height: 200,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: '#595959',
        fontSize: 14,
        padding: 20,
        textAlign: 'center'
    },
    buttonContainer : {
        color: '#595959',
        margin : 20,
        fontFamily: 'Quicksand'
    },
    btn : {
        width: '80%',
        textColor: '#fff',
        backgroundColor: '#595959',
        borderRadius: 10,
        padding: 20,
        margin: 30,
        fontFamily: 'Quicksand',
        fontWeight: 600,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    btnText : {
        color: '#fff',
        fontFamily: 'Quicksand'
    }
});



//Push App To View
export default App;