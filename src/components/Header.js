import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.text1}>Prima aplicație</Text>
        <Text style={styles.text2}>făcută cu Expo!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 25,
        marginTop: 60,
    },

    text1: {
        fontSize: 35
    },
    text2: {
        fontSize: 35,
        fontWeight: 'bold'
    },
});

export default Header