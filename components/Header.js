import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';




//Main App Function
const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/images/logo.png')} title="Official Logo" style={styles.favicon}/>
            <Text style={styles.text}>Fondo Expreso</Text>
        </View>
    );
}




//CSS Styling Of The App
const styles = StyleSheet.create({
    header: {
        top: 0,
        height: 60,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#595959',
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'left',
        paddingLeft: 30,
        paddingTop: 5,
        fontFamily: 'Quicksand'
    },
    favicon: {
        radius: '50%',
        maxWidth:70,
        maxHeight: 50,
        padding: 5
    }
});




//Push App To View
export default Header;