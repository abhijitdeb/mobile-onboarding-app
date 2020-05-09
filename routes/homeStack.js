import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Home from "../screens/home";
import Header from "../shared/header";
import IntakeDetails from "../screens/intakeDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="My Mobile Apps" />
                ),
            };
        },
    },
    IntakeDetails: {
        screen: IntakeDetails,
        navigationOptions: {
            title: "Application Details",
        },
    },
};

const HomeStack = createStackNavigator(screens, {
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

export default HomeStack;
