import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RouteCard(props) {
    const { routeName, lastTimeSeen } = props;
    return (
        <TouchableOpacity
            onPress={() => {
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