import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function IntakeDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam("appName")}</Text>
                <Text>{navigation.getParam("appTeamContactInfo")}</Text>
                <Text>{navigation.getParam("appSponsorName")}</Text>
            </Card>
        </View>
    );
}
