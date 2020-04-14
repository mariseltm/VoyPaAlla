import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import shortid from "shortid";
import { Autocomplete, withKeyboardAwareScrollView } from "react-native-dropdown-autocomplete";

export class MunicCombo extends Component {
    handleSelectItem(item, index) {
        const { onDropdownClose } = this.props;
        onDropdownClose();
        console.log(item);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        const municipalities = ["La Lisa", "Marianao", "Boyeros", "Habana del Este",
            "Cerro", "10 de octubre", "Habana Vieja", "Centro Habana",
            "Plaza", "Arroyo Naranjo", "Guanabacoa"];

        const { onDropdownClose, onDropdownShow } = this.props;

        return (
            <View style={styles.autocompletesContainer}>
                <SafeAreaView>
                    <Autocomplete
                        placeholder="Municipio"
                        key={shortid.generate()}
                        style={styles.input}
                        // scrollToInput={ev => scrollToInput(ev)}
                        handleSelectItem={(item, index) => this.handleSelectItem(item, index)}
                        onDropdownClose={() => onDropdownClose()}
                        onDropdownShow={() => onDropdownShow()}
                        renderIcon={() => (
                            <Icon name="map-marker" size={20} color="#c7c6c1" style={styles.plus} />
                        )}
                        data={municipalities}
                        minimumCharactersCount={0}
                        highlightText
                        valueExtractor={item => item}
                        rightContent
                        rightTextExtractor={item => item.properties}
                    />
                </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    autocompletesContainer: {
        paddingTop: 0,
        zIndex: 1,
        width: "100%",
        paddingHorizontal: 8,
    },
    input: { maxHeight: 40 },
    inputContainer: {
        display: "flex",
        flexShrink: 0,
        flexGrow: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#c7c6c1",
        paddingVertical: 13,
        paddingLeft: 12,
        paddingRight: "5%",
        width: "100%",
        justifyContent: "flex-start",
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    plus: {
        position: "absolute",
        left: 15,
        top: 10,
    },
});

export default withKeyboardAwareScrollView(MunicCombo);