import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const SearchBar = props => {
    const [value, onChangeText] = React.useState(value);

    return (
        <TextInput
            style={styles.searchBar}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder={'Search communities'}
        />
    );
}

export default SearchBar;