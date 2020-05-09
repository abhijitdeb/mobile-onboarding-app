import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";
import RadioButtonGroupField from "../../shared/radioButtonGroupField";
import MyDatePicker from "../../shared/datePicker";

export default function StepEight({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handlePrev,
    handleNext,
}) {
    const handleDateChanged = (value) => {
        values.deploymentDate = value;
    };
    return (
        <View>
            <RadioButtonGroupField
                name="UAT Succeeded:"
                options={values.uatSucceeded}
                touched={touched}
            />
            <Text style={globalStyles.errorText}>
                {touched.uatSucceeded && errors.uatSucceeded}
            </Text>
            <MyDatePicker
                name="deploymentDate"
                value={values.deploymentDate}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleDateChanged={handleDateChanged}
            />
            <Text style={globalStyles.errorText}>
                {touched.deploymentDate && errors.deploymentDate}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Expected Release Cycle"
                onChangeText={handleChange("releaseCycle")}
                value={values.releaseCycle}
                onBlur={handleBlur("releaseCycle")}
            />
            <Text style={globalStyles.errorText}>
                {touched.releaseCycle && errors.releaseCycle}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={!(touched.releaseCycle && !errors.releaseCycle)}
            />
        </View>
    );
}
