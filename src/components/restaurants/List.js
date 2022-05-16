import {Text, StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import useRestaurants from '../../hooks/useRestaurants';
import Card from "./Card";
import { useEffect } from 'react';

const List = ({current}) => {

  const [results, searchRestaurants] = useRestaurants();
 
    useEffect(() => {
        searchRestaurants(current)
    }, [current])

    const renderItem = ({ item, index }) => <Card item={item} />

    if(results.loading) {
        return (
            <View>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        )
    }

    if(results.error) {
        return (
            <View style={styles.error}>
                <Text style={styles.textError}>{results.error}</Text>
            </View>
        )
    }

  return (
      <View style={styles.container}>
          <Text style={styles.header}>Restaurante</Text>
          <FlatList 
                showsVerticalScrollIndicator={false}
                data={results.data} 
                renderItem={renderItem} 
                keyExtractor={item => item.id} 
                style={{marginVertical: 20, marginBottom: 650}} 
                ListFooterComponent={<View style={{height: 400}}/>}
            />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginHorizontal: 15,
        marginVertical: 25,
        // flex: 1
    },

    header: {
        fontWeight: "bold",
        fontSize: 28
    },

    error: {
        textAlign: 'center',
       
    },

    textError: {
        color: 'red'
    }
});

export default List