import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '../constants/colors';
import InfoRoutes from '../components/InfoRoutes';
import RouteInfo from '../components/RouteInfo';

const MainScreen = () => {
    const [currentScreen, setCurrentScreen] = useState('Main');

    const mainScreen =
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Bienvenido a la App </Text>
                <Text style={styles.title}> "Voy pa' allá"! </Text>
                <p>-imagen de fondo-</p>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Cómo llego?"
                        onPress={() => setCurrentScreen('Screen1')} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Dónde estoy?"
                        onPress={() => setCurrentScreen('Screen2')} color={Colors.primary} /></View>
                </View>
                <RouteInfo routeIdx={1}></RouteInfo>
            </View>
        </TouchableWithoutFeedback>

    const routesScreen = <InfoRoutes></InfoRoutes>
    const secondScreen = <View style={styles.screen}>
        <Text style={styles.title}>Screen2 </Text>
    </View>

    const getScreen = () => {
        switch (currentScreen) {
            case 'Main':
                return mainScreen;
            case 'Screen1':
                return routesScreen;
            case 'Screen2':
                return secondScreen;
        }
    }

    return getScreen();
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