import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Header from './components/Header';


//CSS Styling Of The App
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
        fontSize: 20,
        padding: 10,
        //alignItems: 'center'
    },
    label: {
        color: 'black',
        fontSize: 12,
        marginLeft: 25
    },
    link: {
        color: 'blue',
        fontSize: 14,
        padding: 10
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
    button : {
        color: 'black',
        margin : 20,
        padding : 20,
        width: '80%'
    }
});



//Main App Function
const App = () => {
    return (
        <View style={styles.appContainer}>
            <Header />

            <Text style={styles.text}>Become a Member</Text>
            <Text style={styles.link}>Already a Member? Login</Text>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.textInput} placeholder="Johnson" />
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.textInput} placeholder="Darey" />
            <Text style={styles.label}>Email ID</Text>
            <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.textInput} placeholder="**********" />

            <Button title="Continue"></Button>
        </View>
    );
}




//Push App To View
export default App;