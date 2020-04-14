import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { store } from '../store.js';

export default function RouteCard(props) {
    const { routeName, lastTimeSeen } = props;
    const { dispatch } = useContext(store);
    return (
        <TouchableOpacity
            onPress={() => {
                dispatch({ type: 'Add recent route', routeName: routeName });
                props.navigation.push('RouteInfo', { routeName: routeName });
            }}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardRoute}>{routeName}</Text>
                <Text style={styles.cardSeenInfo}>{lastTimeSeen}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardSeenInfo: { textAlign: "right", marginRight: 5 },
    cardRoute: { fontSize: 30, paddingLeft: 5 },
    cardContainer: { borderWidth: 1, minWidth: 200, margin: 10 },
})