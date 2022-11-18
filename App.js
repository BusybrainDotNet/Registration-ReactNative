import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import Header from './components/Header';


//Function To Check Form Fields
const validate = (props) => {
    const [empty, setEmpty] = useState(true);
}

//CSS Styling Of The App
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
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
    smallText: {
        color: 'black',
        fontSize: 12,
        paddingBottom: 40,
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
    },
    image: {
        borderRadius: 100 / 2,
        padding: 10,
        maxWidth: 200,
        maxHeight: 200,
        margin: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: 'blue',
        fontSize: 14,
        padding: 20,
        textAlign: 'center'
    },
    textInput : {
        width: '70%',
        height: 40,
        borderRadius: 5,
        borderColor: '#000',
        paddingLeft : 30,
        borderWidth: 1,
        marginBottom: 15,
        marginLeft: 45,
        marginTop: 10,
        alignItems: 'center'
    },
    buttonContainer : {
        color: 'black',
        paddingLeft : 30,
        paddingRight : 30,
        margin : 20,
    }
});



//Main App Function
const App = () => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <ScrollView>
                <View>
                    <Image source={require('./logo.png')} title="Profile Image" style={styles.image}/>
                    <Text style={styles.text}>Member Registration</Text>
                    <Text style={styles.smallText}>Fill The Form Fields Below To Become A Member</Text>

                    <Text style={styles.label}>First Name</Text>
                    <TextInput style={styles.textInput} placeholder="Johnson" />
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.textInput} placeholder="Darey" />
                    <Text style={styles.label}>Email ID</Text>
                    <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.textInput} placeholder="**********" />

                    <View style={styles.buttonContainer}>
                        <Button
                        title="Continue"
                        color="#841584"
                        onPress={() => {
                        setEmpty(true);
                        }}
                        accessibilityLabel="Register"/>
                        <Text style={styles.link}>Already a Member? Login</Text>
                        <Text style={styles.smallText}>The Number One Utility Payment Platform In Africa! </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}




//Push App To View
export default App;