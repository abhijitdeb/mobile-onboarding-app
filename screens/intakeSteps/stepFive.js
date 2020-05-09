import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";
import CheckboxGroupField from "../../shared/checkboxGroupField";

export default function StepFive({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handlePrev,
    handleNext,
}) {
    return (
        <View>
            <TextInput
                style={globalStyles.input}
                placeholder="Network Ports Used"
                onChangeText={handleChange("networkPorts")}
                value={values.networkPorts}
                onBlur={handleBlur("networkPorts")}
                keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
                {touched.networkPorts && errors.networkPorts}
            </Text>
            <CheckboxGroupField
                name="Phone Manufacturer:"
                options={values.phoneManufacturer}
                touched={touched}
            />
            <Text style={globalStyles.errorText}>
                {touched.appType && errors.appType}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Target Device Model"
                onChangeText={handleChange("targetDeviceModels")}
                value={values.targetDeviceModels}
                onBlur={handleBlur("targetDeviceModels")}
            />
            <Text style={globalStyles.errorText}>
                {touched.targetDeviceModels && errors.targetDeviceModels}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={
                    !(
                        touched.networkPorts &&
                        !errors.networkPorts &&
                        touched.targetDeviceModels &&
                        !errors.targetDeviceModels
                    )
                }
            />
        </View>
    );
}
