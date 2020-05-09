import React from "react";
import { TextInput, View, Text, Keyboard, CheckBox } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";
import CheckboxGroupField from "../../shared/checkboxGroupField";

export default function StepThree({
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
            <CheckboxGroupField
                name="Application Type"
                options={values.appType}
                touched={touched}
            />
            <Text style={globalStyles.errorText}>
                {touched.appType && errors.appType}
            </Text>
            <CheckboxGroupField
                name="Application Source"
                options={values.appSource}
                touched={touched}
            />
            <Text style={globalStyles.errorText}>
                {touched.appSource && errors.appSource}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={false}
            />
        </View>
    );
}
