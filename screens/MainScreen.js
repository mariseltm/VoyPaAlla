import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import InfoRoutes from '../components/InfoRoutes';

const MainScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0
            || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME"
                    onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Bienvenido a la App </Text>
                <Text style={styles.title}> "Voy pa' allá"! </Text>
                <p>-imagen de fondo-</p>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Como llego?" onPress={resetInputHandler} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Donde estoy" onPress={confirmInputHandler} color={Colors.primary} /></View>
                </View>

                <InfoRoutes></InfoRoutes>
            </View>
        </TouchableWithoutFeedback>
    );
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