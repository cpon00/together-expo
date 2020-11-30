import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from './styles'
import SearchBar from './SearchBar'
//import TopNavigationBar from './TopNavigationBar'


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
          <Image
            source={item}
            style={styles.communities}
            keyExtractor={(item) => item.id}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Explore