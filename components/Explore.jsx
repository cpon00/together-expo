import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from './styles'
import SearchBar from './SearchBar'
//import TopNavigationBar from './TopNavigationBar'
//https://reactnative.dev/docs/pressable
//https://reactnativeelements.com/docs/searchbar/

const Explore = props => {

  const [communities, setcommunities] = useState([
    require('../assets/coding.png'),
    require('../assets/pottery.png'),
    require('../assets/rollerskating.png'),
    require('../assets/violin.png'),
    require('../assets/guitar.jpg'),
    require('../assets/coders.jpg')
  ]);

  return (
    <SafeAreaView>
      <SearchBar/>
      <FlatList
        data={communities}
        key={"2"}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable onPress={() => alert('Not Yet Implemented')}>
            <Image
            source={item}
            style={styles.communities}
            keyExtractor={(item) => item.id}
          />
          </Pressable>
          
        )}
      />
    </SafeAreaView>
  )
}

export default Explore