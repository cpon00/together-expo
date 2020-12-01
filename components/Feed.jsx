import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
// import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import styles from './styles'
import Comments from "./Comments";

const Feed = props => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}together</Text>
      <Card borderRadius={15}>
        <Text style={styles.username}>@stemmy</Text>
        <View style={styles.posts} >
          <TouchableOpacity onPress={() => alert('Not Yet Implemented')}>
            <Image source={require('../assets/coders.jpg')} style={styles.posts} />
          </TouchableOpacity>
        </View>
        <Text style={styles.captions}>Just started a new job at Google as a Data Scientist! Here's how I did it... #programmer</Text >
        <Comments />
      </Card>
      <Card borderRadius={15}>
        <Text style={styles.username}>@guitarguy</Text>
        <TouchableOpacity onPress={() => alert('Not Yet Implemented')}>
          <Image source={require('../assets/guitar.jpg')} style={styles.posts} />
        </TouchableOpacity>
        <Text style={styles.captions}>caption 2</Text>
      </Card>
    </View >
  )
}


const handlePostClick = () => {
  console.log('Not Yet Implemented')
}



export default Feed;
