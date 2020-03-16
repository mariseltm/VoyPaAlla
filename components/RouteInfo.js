import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import {routeData} from '../data/routes_data';


export default function RouteInfo(props) {
    const getSeenText = (seenInfo) => {
        if (seenInfo > 24 || seenInfo === 0) {
            return '';
        }

        if (seenInfo >= 1) {
            const hours = Math.ceil(seenInfo);
            const minutes = seenInfo - hours;
            const strMinutes = minutes > 0 ? minutes.toString() + 'm' : '';
            return hours.toString() + 'h' + strMinutes;
        }

        const minutes = seenInfo * 60;
        return minutes.toString() + 'm';
    }

    const routeSelected = routeData[props.routeIdx]; 
    const stops = routeSelected.stops;
    const lastIndex = stops.length - 1;
    const firstStop = stops[0].stopName;
    const lastStop = stops[lastIndex].stopName;

    return (
        <View style={{ minWidth: 400, borderColor: 'black', borderWidth: 1 }}>
            <Text style={{ margin: 10, fontSize: 20 }}>{routeSelected.routeName}</Text>
            <Text style={{ marginHorizontal: 10 }}>Desde '{firstStop}' hasta '{lastStop}'</Text>
            <FlatList
                style={{ margin: 10 }}
                data={stops}
                renderItem={({ item }) =>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={require('../assets/route_point.png')} style={{
                                height: 30, width: 24, borderRadius: 100,
                                marginRight: 8
                            }}></Image>
                            <Text style={{ flex: 1 }}>{item.stopName}</Text>
                            <Text>{getSeenText(item.seenInfo)}</Text>
                        </View>
                    </View>
                }
                keyExtractor={item => item.stopName}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})