import {View, Text, ActivityIndicator, FlatList, Image, Dimensions, StyleSheet} from 'react-native';
import useRestaurant from '../hooks/useRestaurant';
import {useEffect} from 'react';

const Restaurant = ({navigation}) => {
    const dimensions = Dimensions.get("window");
    const _width = dimensions.width;
    const _height = Math.round((dimensions.width * 9) / 12);

    const [result, searchRestaurant] = useRestaurant();
    const id = navigation.getParam("id");

    useEffect(() => {
        searchRestaurant(id);
    }, [])

    console.log("result", result.data)

    if(result.loading) {
        return (
            <View>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        )
    }

    if(result.error) {
        return (
            <View style={styles.error}>
                <Text style={styles.textError}>{result.error}</Text>
            </View>
        )
    }

    if(result && result.data){
        return (
          <View style={styles.container}>
              <Text style={styles.name}>{result.data.name}</Text>
              <Text style={styles.location}>{result.data.location.address1}</Text>
              <View style={styles.inline}>
                    <Text style={styles.rating}>
                        <Image source={require('../assets/icons/star.png')} style={{width: 20, height: 20, marginBottom: -4}} /> {result.data.rating}
                    </Text>
                    <Text style={styles.price}>{result.data.price}</Text>
                </View>

              <FlatList
                  data={result.data.photos}
                  keyExtractor={photo => photo}
                  renderItem={({item}) => <Image source={{uri: item}} style={{width: _width, height: _height, marginVertical: 20}} />}
                  style={{marginVertical: 20}}
              />
              
          </View>
        )
    }

    return (
        <View><Text></Text></View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
        textAlign: "center"
    },
    location: {
        textAlign: "center",
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

export default Restaurant