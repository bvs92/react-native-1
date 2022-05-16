

import { View, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Search from '../components/Search';
import List from '../components/categories/List';
import Restaurants from '../components/restaurants/List';
import { useState } from 'react';

const Home = () => {
    const [current, setCurrent] = useState('');

  return (
    <SafeAreaView>
    <View>
        <Header />
        <StatusBar style="auto" />
        <Search setCurrent={setCurrent} />

        <List setCurrent={setCurrent} current={current} />

        <Restaurants current={current} />
      </View>
      </SafeAreaView>
  )
}

export default Home