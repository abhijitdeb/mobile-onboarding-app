import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";
import CheckboxGroupField from "../../shared/checkboxGroupField";

export default function StepSeven({
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
                name="Functional Testing Result:"
                options={values.functionalTesting}
                touched={touched}
            />
            <Text style={globalStyles.errorText}>
                {touched.functionalTesting && errors.functionalTesting}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="What Security Scans Completed"
                onChangeText={handleChange("securityScansCompleted")}
                value={values.securityScansCompleted}
                onBlur={handleBlur("securityScansCompleted")}
            />
            <Text style={globalStyles.errorText}>
                {touched.securityScansCompleted &&
                    errors.securityScansCompleted}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={
                    !(
                        touched.securityScansCompleted &&
                        !errors.securityScansCompleted
                    )
                }
            />
        </View>
    );
}
