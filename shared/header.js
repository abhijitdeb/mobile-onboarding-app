import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View>
            <ImageBackground style={headerStyles.header}>
                <MaterialIcons
                    name="menu"
                    size={32}
                    onPress={openMenu}
                    style={headerStyles.icon}
                />
                <View style={headerStyles.header}>
                    <Image
                        source={require("../assets/icon.png")}
                        style={headerStyles.headerImage}
                    />
                    <Text style={headerStyles.headerText}>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        letterSpacing: 1,
    },
    icon: {
        position: "absolute",
        left: 1,
        color: "white",
    },
    headerTitle: {
        flexDirection: "row",
    },
    headerImage: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
        marginBottom: 5,
    },
});
