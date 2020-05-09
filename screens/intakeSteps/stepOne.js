import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";
import CheckboxGroupField from "../../shared/checkboxGroupField";

export default function StepOne({
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
                placeholder="Application Team Contact Info"
                onChangeText={handleChange("appTeamContactInfo")}
                value={values.appTeamContactInfo}
                onBlur={handleBlur("appTeamContactInfo")}
                blurOnSubmit={false}
                autoFocus={true}
            />
            <Text style={globalStyles.errorText}>
                {touched.appTeamContactInfo && errors.appTeamContactInfo}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Application Name"
                onChangeText={handleChange("appName")}
                value={values.appName}
                onBlur={handleBlur("appName")}
            />
            <Text style={globalStyles.errorText}>
                {touched.appName && errors.appName}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Sponsor Name"
                onChangeText={handleChange("appSponsorName")}
                value={values.appSponsorName}
                onBlur={handleBlur("appSponsorName")}
            />
            <Text style={globalStyles.errorText}>
                {touched.appSponsorName && errors.appSponsorName}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={true}
                nextDisabled={
                    !(
                        touched.appTeamContactInfo &&
                        !errors.appTeamContactInfo &&
                        touched.appName &&
                        !errors.appName &&
                        touched.appSponsorName &&
                        !errors.appSponsorName
                    )
                }
            />
        </View>
    );
}
