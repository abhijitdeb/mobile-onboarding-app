import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { date } from "yup";

const getDateString = (selectedDate) => {
    let year = selectedDate.getFullYear().toString();
    let month = (selectedDate.getMonth() + 1).toString();
    month = month.length < 2 ? "0" + month : month;
    let date = selectedDate.getDate().toString();
    date = date.length < 2 ? "0" + date : date;
    return year + "-" + month + "-" + date;
};

const setDateString = (thisDate) => {
    let selectedDate = new Date(thisDate);
    selectedDate.setDate(selectedDate.getDate() + 2);
    let year = selectedDate.getFullYear().toString();
    let month = (selectedDate.getMonth() + 1).toString();
    month = month.length < 2 ? "0" + month : month;
    let date = selectedDate.getDate().toString();
    date = date.length < 2 ? "0" + date : date;
    return year + "-" + month + "-" + date;
};

export default function MyDatePicker({
    name,
    value,
    touched,
    handleDateChanged,
}) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dateValue, setDateValue] = useState(value);
    return (
        <View style={datePickerStyle.datePickerContainer} key={name}>
            <TextInput
                style={datePickerStyle.datePickerInput}
                placeholder="Deployment Date"
                value={dateValue}
                editable={false}
            />
            <MaterialIcons
                name="date-range"
                size={45}
                onPress={() => {
                    setShowDatePicker(true);
                }}
                style={datePickerStyle.icon}
            />
            {showDatePicker && (
                <DateTimePicker
                    value={new Date(setDateString(dateValue))}
                    mode="date"
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (event.type === "set") {
                            const date = getDateString(
                                selectedDate || new Date(dateValue)
                            );
                            handleDateChanged(date);
                            setDateValue(date);
                        }
                    }}
                />
            )}
        </View>
    );
}

const datePickerStyle = StyleSheet.create({
    datePickerContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        marginBottom: 20,
    },
    datePickerInput: {
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 20,
        borderRadius: 6,
        textAlignVertical: "center",
        textAlign: "right",
        paddingRight: 6,
        marginRight: 10,
        width: 300,
        color: "#ddd",
    },
    icon: {
        left: 16,
        color: "#008275",
    },
});
