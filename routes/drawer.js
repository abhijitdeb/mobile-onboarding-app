import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Platform, Dimensions } from "react-native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import MenuDrawer from "../shared/menuDrawer";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
    contentComponent: ({ navigator: navigator }) => {
        return <MenuDrawer />;
    },
};

const rootDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        About: {
            screen: AboutStack,
        },
    },
    DrawerConfig
);

export default createAppContainer(rootDrawerNavigator);
