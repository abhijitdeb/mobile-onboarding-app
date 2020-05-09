import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function FlatButton({ text, onPress, disabled }) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View
                style={
                    disabled
                        ? flatButtonStyles.buttonDisabled
                        : flatButtonStyles.buttonEnabled
                }
            >
                <Text style={flatButtonStyles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const flatButtonStyles = StyleSheet.create({
    buttonEnabled: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "maroon",
    },
    buttonDisabled: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "gray",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 18,
        textAlign: "center",
        paddingLeft: 10,
        paddingHorizontal: 10,
    },
});
