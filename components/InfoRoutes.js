import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import RouteCard from './RouteCard';

function InfoRouteSeparator(props) {
    const { image, text } = props;
    return (
        <View style={{ flexDirection: "row" }}>
            <Text>{image}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const sampleRoutes = ['P1', 'P2', 'P3', 'P4', 'A40', '450', '222', '33'];

export default function InfoRoutes() {
    const [value, setValue] = useState('');
    const [resultRoutes, setResultRoutes] = useState([]);

    const filterRoutes = (searchTerm) => {
        setValue(searchTerm);
        let filtered = [];
        sampleRoutes.forEach(x => {
            if (x.toLowerCase().includes(searchTerm.toLowerCase()))
                filtered.push(x);
        });
        setResultRoutes(filtered);
    }

    const uiSearchResult = (
        <View>
            <FlatList
                data={resultRoutes}
                renderItem={({ item }) => <RouteCard routeName={item} lastTimeSeen='Visto hace 10m'></RouteCard>}
                keyExtractor={item => item}
            />
        </View>
    );

    const uiResume = (
        <View>
            <InfoRouteSeparator image='[star]' text='Favoritos'></InfoRouteSeparator>

            <View style={styles.routeCardContainer}>
                <RouteCard routeName='P3' lastTimeSeen='Visto hace 2h'></RouteCard>

                <RouteCard routeName='P14' lastTimeSeen='Visto hace 1h'></RouteCard>

                <RouteCard routeName='P1' lastTimeSeen='Visto hace 30m'></RouteCard>
            </View>

            <InfoRouteSeparator image='[clock]' text='Recientes'></InfoRouteSeparator>

            <View style={styles.routeCardContainer}>
                <RouteCard routeName='222' lastTimeSeen='Visto hace 2h'></RouteCard>

                <RouteCard routeName='450' lastTimeSeen='Visto hace 1h'></RouteCard>

                <RouteCard routeName='A40' lastTimeSeen='Visto hace 10m'></RouteCard>
            </View>
        </View>
    );

    return (
        <View>
            <Text>Información de transportación</Text>
            <View style={styles.searchBox}>
                <TextInput style={styles.searchInput} placeholder='Buscar nombre de ruta' autoFocus={true} onChangeText={(text) => filterRoutes(text)} value={value}></TextInput>
                <Text style={styles.searchIcon}>()</Text>
            </View>

            {value ? uiSearchResult : uiResume}
        </View>
    );
};

const styles = StyleSheet.create({
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
