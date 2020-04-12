import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Button } from 'react-native';
import RouteCard from './RouteCard';
import { routeData } from '../data/routes_data';

function InfoRouteSeparator(props) {
    const { image, text } = props;
    return (
        <View style={{ flexDirection: "row" }}>
            <Text>{image}</Text>
            <Text>{text}</Text>
        </View>
    )
}

export default function InfoRoutes(props) {

    const [filterText, setFilterText] = useState('');
    const [resultRoutes, setResultRoutes] = useState([]);
    const [favoriteRoutes, setFavoriteRoutes] = useState([1, 2, 3, 4]);
    const [recentRoutes, setRecentRoutes] = useState([5, 6, 7]);

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
            <InfoRouteSeparator image='[star]' text='Favoritos'></InfoRouteSeparator>

            <View style={styles.routeCardContainer}>
                {getRoutesFromIndexes(favoriteRoutes).map(x =>
                    <RouteCard navigation={props.navigation} routeName={x.routeName} lastTimeSeen='Visto hace 10m'></RouteCard>
                )}
            </View>

            <InfoRouteSeparator image='[clock]' text='Recientes'></InfoRouteSeparator>

            <View style={styles.routeCardContainer}>
                {getRoutesFromIndexes(recentRoutes).map(x =>
                    <RouteCard navigation={props.navigation} routeName={x.routeName} lastTimeSeen='Visto hace 10m'></RouteCard>
                )}
            </View>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <Button title='Back'
                onPress={() => props.navigation.goBack()}
            ></Button>
            <Text style={styles.mainHeader}>Información de transportación</Text>
            <View style={styles.searchBox}>
                <TextInput style={styles.searchInput} placeholder='Buscar nombre de ruta' autoFocus={true} onChangeText={(text) => filterRoutes(text)} value={filterText}></TextInput>
                <Text style={styles.searchIcon}>()</Text>
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
