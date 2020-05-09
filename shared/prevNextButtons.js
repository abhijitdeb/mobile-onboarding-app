import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FlatButton from "./flatButton";

export default function PrevNextButtons({
    onPressPrev,
    onPressNext,
    prevDisabled,
    nextDisabled,
}) {
    return (
        <View style={prevNextButtonsStyles.container}>
            <FlatButton
                text="Prev"
                onPress={onPressPrev}
                disabled={prevDisabled}
            />
            <FlatButton
                text="Next"
                onPress={onPressNext}
                disabled={nextDisabled}
            />
        </View>
    );
}

const prevNextButtonsStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
