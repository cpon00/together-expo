<<<<<<< HEAD
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
=======
import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import { View, Text, Image, Button } from 'react-native'
>>>>>>> 4cdc1971c8ebabb7dd9b4381f799e8d79d68d572
import styles from './styles'
import Comments from "./Comments";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import { Icon } from '@material-ui/core';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';




const Feed = props => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}together</Text>
      <Card borderRadius={15}>
        <Text style={styles.username}>@stemmy</Text>
        <View style={styles.posts}>
          <Image source={require('../assets/coders.jpg')} style={styles.posts} />
        </View>
        <Text style={styles.captions}>Just started a new job at Google as a Data Scientist! Here's how I did it... #programmer</Text >
        <Comments />
      </Card>
      <Card borderRadius={15}>
        <Text style={styles.username}>@guitarguy</Text>
        <Image source={require('../assets/guitar.jpg')} style={styles.posts} />
        <Text style={styles.captions}>caption 2</Text>
      </Card>
    </View>
  )
}



export default Feed;