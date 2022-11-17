import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



//CSS Styling Of The App
const styles = StyleSheet.create({
    header: {
        top: 0,
        height: 50,
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
        borderRadius: '50%',
        maxWidth: 70,
        maxHeight: 50
    }
});



//Main App Function
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Fondo Expreso</Text>
        </View>
    );
}




//Push App To View
export default Header;