import React, { useState } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function RadioButtonGroupField({ name, options, touched }) {
    const [toggle, setToggle] = useState(true);
    return (
        <View>
            <Text style={radioBoxGroupFieldStyle.headerText}>{name}</Text>
            <View style={radioBoxGroupFieldStyle.container}>
                {options.map((value) => {
                    return (
                        <View
                            key={value.title}
                            style={radioBoxGroupFieldStyle.checkBoxContainer}
                        >
                            <View style={radioBoxGroupFieldStyle.title}>
                                <Text>{value.title}</Text>
                            </View>
                            <View style={radioBoxGroupFieldStyle.checkBox}>
                                <Switch
                                    value={value.checked}
                                    onValueChange={() => {
                                        value.checked = !value.checked;
                                        options.map((option) => {
                                            option.title != value.title
                                                ? (option.checked = !value.checked)
                                                : (option.checked =
                                                      value.checked);
                                        });
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

const radioBoxGroupFieldStyle = StyleSheet.create({
    container: {
        borderColor: "black",
        borderRadius: 6,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: "#ddd",
        marginBottom: 5,
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
