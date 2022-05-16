import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { rounded } from '../../common/styles';

const Card = ({name, image, index, active, setCurrent}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        styles.rounded, 
        styles.white, 
        index === 0 ? {marginLeft: 15} : {marginLeft: 5},
        active ? {backgroundColor: '#fccfa7'} : {backgroundColor: 'white'}
      ]} 
      onPress={setCurrent}
    >
      <View style={styles.imageContainer}>
          <Image source={image} style={{ width: 35, height: 35 }} />
        {/* <Text style={styles.text}>{name}</Text> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  white: {
    backgroundColor: 'white'
  },

  rounded,

  imageContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },

  text: {
    textAlign: 'center',
    fontSize: 13
  }
});

export default Card