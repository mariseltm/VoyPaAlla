import React from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '../constants/colors';

const MainScreen = (props) => {

    const goTo = (screen) => props.navigation.push(screen)

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Bienvenido a la App </Text>
                <Text style={styles.title}> "Voy pa' allá"! </Text>
                <Text>-imagen de fondo-</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cómo llego?"
                            onPress={() => goTo('InfoRoutes')}
                            color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Dónde estoy?"
                            onPress={() => { }} color={Colors.primary} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    button: {
        width: 150,
        height: 60
    },
    input: {
        width: 50,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default MainScreen;