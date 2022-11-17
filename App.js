import React from 'react';
import {ScrollView, View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import Header from './components/Header';


//CSS Styling Of The App
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        padding: 10,
        textAlign: 'left',
        color: 'white',
    },
    text: {
        color: 'black',
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        color: 'black',
        fontSize: 12,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop: 0,
        maxWidth: 150,
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: 'blue',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    textInput : {
        width: '80%',
        height: 40,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 15,
        marginLeft: 25,
        marginTop: 10,
        alignItems: 'center'
    },
    buttonContainer : {
        color: 'black',
        paddingLeft : 35,
        paddingRight : 40,
    }
});



//Main App Function
const App = () => {
    return (
            <ScrollView>
                <View style={styles.appContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('./logo.png')} title="Profile Image" style={styles.image}/>
                        <Text style={styles.text}>Become a Member</Text>
                        <Text style={styles.link}>Already a Member? Login</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput style={styles.textInput} placeholder="Johnson" />
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput style={styles.textInput} placeholder="Darey" />
                        <Text style={styles.label}>Email ID</Text>
                        <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.textInput} placeholder="**********" />
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Continue" color="#841584"/*onPress={OnPressLearnMore}*/ accessibilityLabel="Register" ></Button>
                    </View>
                </View>
            </ScrollView>
    );
}




//Push App To View
export default App;