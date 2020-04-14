import React, { useState, useContext, useReducer, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Button } from 'react-native';

import MunicCombo from './MunicCombo';
import { routeData } from '../data/routes_data';
import { store } from '../store.js';


export default function HowToGo(props) {

    //Maybe not necessary, only the refPoint destino
    const onMunicDestClose = (enteredText) => {
        console.log("onDropdownClose");
    };

    return (
        <View style={styles.mainContainer}>
            <Button title='Back'
                onPress={() => props.navigation.goBack()}
            ></Button>
            <Text style={styles.mainHeader}>A dónde voy:</Text>
            <Text style={styles.textInputTitle}>Municipio:</Text>
            <MunicCombo onDropdownClose={onMunicDestClose}
            onDropdownShow={onMunicDestClose}></MunicCombo>
            <Text style={styles.mainHeader}>Dónde estoy:</Text>
            <Text style={styles.textInputTitle}>Municipio:</Text>
            <MunicCombo onDropdownClose={onMunicDestClose}
            onDropdownShow={onMunicDestClose}></MunicCombo>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: { maxWidth: 600, marginHorizontal: 10, marginVertical: 10 },
    mainHeader: { fontSize: 24, textAlign: 'center' },
    textInputTitle: { fontSize: 16, textAlign: 'left' },
    routeCardContainer: { flexDirection: "row", flexWrap: "wrap" },
    searchIcon: { textAlign: "right", width: 20 },
    searchInput: { width: '100%' },
    searchBox: {
        borderColor: 1,
        borderWidth: 1,
        flexDirection: "row",
        padding: 5,
        marginVertical: 10
    }
});
