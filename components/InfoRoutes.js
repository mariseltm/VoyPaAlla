import React, { useState, useContext, useReducer, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Button, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import RouteCard from './RouteCard';
import { routeData } from '../data/routes_data';
import { store } from '../store.js';

function InfoRouteSeparator(props) {
    const { image, text } = props;
    return (
        <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Icon name={image} size={20} color="black" />
            <Text style={{ marginLeft: 5 }}>{text}</Text>
        </View>
    )
}

export default function InfoRoutes(props) {
    const { state } = useContext(store);

    const [filterText, setFilterText] = useState('');
    const [resultRoutes, setResultRoutes] = useState([]);
    const [favoriteRoutes] = useState(state.favoriteRoutes);
    const [recentRoutes] = useState(state.recentRoutes);

    const getRoutesFromIndexes = (indexes) =>
        routeData.filter((_, idx) => indexes.indexOf(idx) >= 0);

    const filterRoutes = (searchTerm) => {
        setFilterText(searchTerm);
        let filtered = [];
        routeData.forEach(x => {
            if (x.routeName.toLowerCase().includes(searchTerm.toLowerCase()))
                filtered.push(x.routeName);
        });
        setResultRoutes(filtered);
    }

    useEffect(() => {
        const didFocusSubscription = props.navigation.addListener(
            'didFocus',
            payload => forceUpdate()
        );

        return function cleanup() {
            didFocusSubscription.remove();
        }
    })

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const uiSearchResult = (
        <View>
            <FlatList
                data={resultRoutes}
                renderItem={({ item }) =>
                    <RouteCard navigation={props.navigation} routeName={item}
                        lastTimeSeen='Visto hace 10m'></RouteCard>
                }
                keyExtractor={item => item}
            />
        </View>
    );

    const uiResume = (
        <View>
            {favoriteRoutes.length > 0 ?
                <>
                    <InfoRouteSeparator image='star' text='Favoritos'></InfoRouteSeparator>

                    <View style={styles.routeCardContainer}>
                        {getRoutesFromIndexes(favoriteRoutes).map(x =>
                            <RouteCard navigation={props.navigation} routeName={x.routeName} lastTimeSeen='Visto hace 10m'></RouteCard>
                        )}
                    </View>
                </> : <></>}

            {recentRoutes.length > 0 ?
                <>
                    <InfoRouteSeparator image='history' text='Recientes'></InfoRouteSeparator>

                    <View style={styles.routeCardContainer}>
                        {getRoutesFromIndexes(recentRoutes).map(x =>
                            <RouteCard navigation={props.navigation} routeName={x.routeName} lastTimeSeen='Visto hace 10m'></RouteCard>
                        )}
                    </View>
                </> : <></>}
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <Button title='Back'
                onPress={() => props.navigation.goBack()}
            ></Button>

            <Text style={styles.mainHeader}>Información de transportación</Text>
            <View style={styles.searchBox}>
                <TextInput style={styles.searchInput} placeholder='Buscar nombre de ruta'
                    autoFocus={true} onChangeText={filterRoutes} value={filterText}>
                </TextInput>
                <TouchableWithoutFeedback onPress={() => { filterText ? filterRoutes('') : null }}>
                    <Icon name={filterText ? 'times' : 'search'} size={20} color="black" />
                </TouchableWithoutFeedback>
            </View>

            {filterText ? uiSearchResult : uiResume}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: { maxWidth: 600, marginHorizontal: 10, marginVertical: 10 },
    mainHeader: { fontSize: 24, textAlign: 'center' },
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
