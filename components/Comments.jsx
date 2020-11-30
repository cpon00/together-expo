import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Comments = () => {
    const [value, onChangeText] = React.useState(value);

    return (
        <TextInput
            style={styles.comments}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder={'Leave a positive comment...'}
        />
    );
}

export default Comments;