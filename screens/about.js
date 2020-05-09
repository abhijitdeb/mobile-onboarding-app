import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
    return (
        <View>
            <Image
                source={require("../assets/usbp.png")}
                style={globalStyles.image}
            />
            <Text style={globalStyles.paragraph}>
                This application has been built by TIO Architecture Team. You
                can use this application to onboard new mobile apps for usage in
                CBP. This app is the first step of the process to make your
                mobile app available for the rest of the staff members. Once
                submitted, you will be contacted and review process will
                continue.
            </Text>
            <Text style={globalStyles.copyRightText}>
                {"\u00A9"} TIO, BEMSD
            </Text>
        </View>
    );
}
