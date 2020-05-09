import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MenuDrawer({ navigation }) {
    return (
        <View style={menuDrawerStyle.container}>
            <Text>Home</Text>
            <Text>About</Text>
        </View>
    );
}

const menuDrawerStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});
