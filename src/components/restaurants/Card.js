import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native"
import { withNavigation } from "react-navigation";

const Card = ({item, navigation}) => {
  return (
      <View style={[
        styles.container,  
        styles.white,
        styles.space
    ]}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Restaurant", {id: item.id})}
        >
            <Image source={{uri: item.image_url}} style={styles.image} />
            <View style={styles.margins}>
                <Text style={styles.text}>{item.name}</Text>
                <View style={styles.inline}>
                    <Text style={styles.phone}>{item.display_phone}</Text>
                    <Text style={styles.address}>{item.location.address1}</Text>
                </View>

                <View style={styles.inline}>
                    <Text style={styles.rating}>
                        <Image source={require('../../assets/icons/star.png')} style={{width: 20, height: 20, marginBottom: -4}} /> {item.rating}
                    </Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      marginHorizontal: 5,
      alignSelf: 'stretch',
      borderRadius: 5,
      flex: 1
    },
  
    white: {
      backgroundColor: '#e8e8e8'
    },

    space: {
        marginVertical: 20
    },

    margins: {
        margin: 10
    },
  
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: "black"
    },

    image: {
        width: '100%', 
        height: undefined, 
        aspectRatio: 1,
        borderRadius: 5
    },

    inline: {
        flex: 1,
        flexDirection:'row',
        flexWrap: "wrap",
        justifyContent: 'space-between',
        marginVertical: 10
    },

    price: {
      fontWeight: "bold"
    },

    rating: {
      fontWeight: "bold"
    },

    phone: {
      fontWeight: "bold"
    },
  });

export default withNavigation(Card)