import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";

export default function StepFour({
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
                multiline={true}
                numberOfLines={7}
                style={globalStyles.input}
                placeholder="Application Identifier"
                onChangeText={handleChange("appIdentifier")}
                value={values.appIdentifier}
                onBlur={handleBlur("appIdentifier")}
            />
            <Text style={globalStyles.errorText}>
                {touched.appIdentifier && errors.appIdentifier}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={!(touched.appIdentifier && !errors.appIdentifier)}
            />
        </View>
    );
}
