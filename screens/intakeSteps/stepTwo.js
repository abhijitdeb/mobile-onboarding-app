import React from "react";
import { TextInput, View, Text, Keyboard } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";

export default function StepTwo({
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
                placeholder="Sponsor's Email"
                onChangeText={handleChange("appSponsorEmail")}
                value={values.appSponsorEmail}
                onBlur={handleBlur("appSponsorEmail")}
                keyboardType={"email-address"}
            />
            <Text style={globalStyles.errorText}>
                {touched.appSponsorEmail && errors.appSponsorEmail}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Sponsor's Phone"
                onChangeText={handleChange("appSponsorPhoneNumber")}
                value={values.appSponsorPhoneNumber}
                onBlur={handleBlur("appSponsorPhoneNumber")}
                keyboardType={"phone-pad"}
            />
            <Text style={globalStyles.errorText}>
                {touched.appSponsorPhoneNumber && errors.appSponsorPhoneNumber}
            </Text>
            <TextInput
                multiline={true}
                numberOfLines={5}
                style={globalStyles.input}
                placeholder="Application Description"
                onChangeText={handleChange("appDescription")}
                value={values.appDescription}
                onBlur={handleBlur("appDescription")}
            />
            <Text style={globalStyles.errorText}>
                {touched.appDescription && errors.appDescription}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={
                    !(
                        touched.appSponsorEmail &&
                        !errors.appSponsorEmail &&
                        touched.appSponsorPhoneNumber &&
                        !errors.appSponsorPhoneNumber &&
                        touched.appDescription &&
                        !errors.appDescription
                    )
                }
            />
        </View>
    );
}
