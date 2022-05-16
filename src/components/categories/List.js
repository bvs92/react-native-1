import { FlatList, View, StyleSheet } from 'react-native';
import Card from './Card';
import {CATEGORIES} from '../../common/icons';


const List = ({setCurrent, current}) => {

    

    const renderItem = ({ item, index }) => {
        return (
            <Card 
                name={item.name} 
                image={item.image} 
                index={index} 
                active={current.toLowerCase() == item.name.toLowerCase() ? true : false} 
                setCurrent={() => setCurrent(item.name)} 
            />
        );
    }

    return (
        <View>
            <FlatList 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                data={CATEGORIES} 
                renderItem={renderItem} 
                keyExtractor={item => item.name} 
                style={{marginVertical: 30}} 
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
    },
});

export default List