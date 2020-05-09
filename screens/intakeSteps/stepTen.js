import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevSubmitButtons from "../../shared/prevSubmitButtons";

export default function StepTen({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handlePrev,
    handleSubmit,
}) {
    return (
        <View>
            <TextInput
                style={globalStyles.input}
                placeholder="Application Mandatory?"
                onChangeText={handleChange("mandatoryApplication")}
                value={values.mandatoryApplication}
                onBlur={handleBlur("mandatoryApplication")}
            />
            <Text style={globalStyles.errorText}>
                {touched.mandatoryApplication && errors.mandatoryApplication}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Added Security Standards"
                onChangeText={handleChange("addedSecurityStandards")}
                value={values.addedSecurityStandards}
                onBlur={handleBlur("addedSecurityStandards")}
            />
            <Text style={globalStyles.errorText}>
                {touched.addedSecurityStandards &&
                    errors.addedSecurityStandards}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Additional Comments"
                onChangeText={handleChange("additionalComments")}
                value={values.additionalComments}
                onBlur={handleBlur("additionalComments")}
            />
            <Text style={globalStyles.errorText}>
                {touched.additionalComments && errors.additionalComments}
            </Text>
            <PrevSubmitButtons
                onPressPrev={handlePrev}
                handleSubmit={handleSubmit}
                prevDisabled={false}
                submitDisabled={
                    !(
                        touched.mandatoryApplication &&
                        !errors.mandatoryApplication &&
                        touched.addedSecurityStandards &&
                        !errors.addedSecurityStandards
                    )
                }
            />
        </View>
    );
}
