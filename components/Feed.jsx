import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { Component } from 'react'
import { Card } from 'react-native-elements'
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
