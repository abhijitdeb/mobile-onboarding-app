import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";
import RadioButtonGroupField from "../../shared/radioButtonGroupField";

export default function StepNine({
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
            <RadioButtonGroupField
                name="Pilot Deployment Needed:"
                options={values.pilotDeployment}
                touched={touched}
            />
            <Text style={globalStyles.errorText}>
                {touched.pilotDeployment && errors.pilotDeployment}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="End User Groups"
                onChangeText={handleChange("endUserGroups")}
                value={values.endUserGroups}
                onBlur={handleBlur("endUserGroups")}
            />
            <Text style={globalStyles.errorText}>
                {touched.endUserGroups && errors.endUserGroups}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Number of End Users"
                onChangeText={handleChange("numberOfEndUsers")}
                value={values.numberOfEndUsers}
                onBlur={handleBlur("numberOfEndUsers")}
                keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
                {touched.numberOfEndUsers && errors.numberOfEndUsers}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={
                    !(
                        touched.releaseCycle &&
                        !errors.releaseCycle &&
                        touched.endUserGroups &&
                        !errors.endUserGroups &&
                        touched.numberOfEndUsers &&
                        !errors.numberOfEndUsers
                    )
                }
            />
        </View>
    );
}
