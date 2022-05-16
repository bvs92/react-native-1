import { useState } from 'react';
import { TextInput, View, StyleSheet, Text  } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import { rounded } from '../common/styles';

const Search = ({setCurrent}) => {
  const [text, setText] = useState('');

  // const handleChange = (text) => {
  //   setText(text);
  // }

  const handleEndEditing = () => {
    if(!text) return;
    setCurrent(text);
    setText('');
  }

  return (
    <View style={styles.container}>
        <TextInput 
          style={[styles.input, styles.shadowProp]} 
          onChangeText={text => setText(text)} 
          placeholder={'Caută restaurant, mâncare'} 
          value={text}
          onEndEditing={handleEndEditing}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 35
    },

    input: {
      flex: 1,
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: '#e3e4e6',
      padding: 10,
      borderRadius: 10
    },

    rounded,

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  });

export default Search