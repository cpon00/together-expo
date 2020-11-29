import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from './styles'


const TopNavigationBar = props => {
  return (
    <SafeAreaView style = {styles.topNavigationBar}>
      <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
      <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
    </SafeAreaView>
  )
}

export default TopNavigationBar