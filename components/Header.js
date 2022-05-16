import React from 'react'
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={StyleSheet.header}>
        <Text style={styles.text}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },

    text: {
        textAlign: 'center',
        backgroundColor: 'red',
        padding: 10,
        color: 'white'
    }
});

export default Header