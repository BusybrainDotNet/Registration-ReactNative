import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';



//CSS Styling Of The App
const styles = StyleSheet.create({
    header: {
        top: 0,
        height:70,
        padding: 10,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'blue'
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left',
        paddingLeft: 50
    },
    favicon: {
        radius: '50%',
        maxWidth:50,
        maxHeight: 30
    }
});



//Main App Function
const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('./logo.png')} title="Profile Image" style={styles.favicon}/>
            <Text style={styles.text}>Fondo Expreso</Text>
        </View>
    );
}




//Push App To View
export default Header;