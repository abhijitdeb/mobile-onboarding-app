import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="About" />
                ),
            };
        },
    },
};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#ffffff",
        headerStyle: {
            backgroundColor: "#03244B",
            borderBottomColor: "#ffffff",
            borderBottomWidth: 3,
        },
        headerTitleAlign: "center",
    },
});

export default AboutStack;
