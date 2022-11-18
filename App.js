import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';



//Main App Function
const App = () => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={require('./assets/images/logo.png')} title="Splash Image" style={styles.image}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                    title="Register"
                    color="#595959"
                    onPress={() => {
                    setEmpty(true);
                    }}
                    accessibilityLabel="Register"/>
                </View>
                    <Text style={styles.link}>Already a Member? Login</Text>
                    <Text style={styles.smallText}>Your Number One Utility Payment Platform In Africa! </Text>
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
        fontSize: 12,
        padding: 40,
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
        color: 'black',
        marginTop : 100,
        paddingLeft : 30,
        paddingRight : 30,
        margin : 20,
    }
});



//Push App To View
export default App;