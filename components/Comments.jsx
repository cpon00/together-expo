import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Comments = () => {
    const [value, onChangeText] = React.useState('Leave a positive comment...');

    return (
        <TextInput
            style={styles.comments}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    );
}

export default Comments;