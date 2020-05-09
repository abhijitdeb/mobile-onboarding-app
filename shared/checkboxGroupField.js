import React, { useState } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function CheckboxGroupField({ name, options, touched }) {
    const [toggle, setToggle] = useState(true);
    return (
        <View>
            <Text style={checkboxGroupFieldStyle.headerText}>{name}</Text>
            <View style={checkboxGroupFieldStyle.container}>
                {options.map((value) => {
                    return (
                        <View
                            key={value.title}
                            style={checkboxGroupFieldStyle.checkBoxContainer}
                        >
                            <View style={checkboxGroupFieldStyle.title}>
                                <Text>{value.title}</Text>
                            </View>
                            <View style={checkboxGroupFieldStyle.checkBox}>
                                <Switch
                                    value={value.checked}
                                    onValueChange={() => {
                                        value.checked = !value.checked;
                                        setToggle(!toggle);
                                    }}
                                />
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const checkboxGroupFieldStyle = StyleSheet.create({
    container: {
        borderColor: "black",
        borderRadius: 6,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: "#ddd",
        marginBottom: 10,
    },
    checkBoxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        width: "90%",
        alignItems: "flex-start",
    },
    checkBox: {
        width: "10%",
        alignItems: "flex-end",
    },
    headerText: {
        borderRadius: 6,
        borderWidth: 0,
        height: 25,
        color: "white",
        backgroundColor: "#008275",
        borderColor: "#ddd",
        textAlignVertical: "center",
        alignContent: "center",
        marginBottom: 5,
    },
});
