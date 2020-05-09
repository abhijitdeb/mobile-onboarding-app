import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import PrevNextButtons from "../../shared/prevNextButtons";
import CheckboxGroupField from "../../shared/checkboxGroupField";

export default function StepSix({
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
                placeholder="Authentication Method"
                onChangeText={handleChange("authMethod")}
                value={values.authMethod}
                onBlur={handleBlur("authMethod")}
            />
            <Text style={globalStyles.errorText}>
                {touched.authMethod && errors.authMethod}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="VPN Tunnel Needed"
                onChangeText={handleChange("vpnTunnelNeeded")}
                value={values.vpnTunnelNeeded}
                onBlur={handleBlur("vpnTunnelNeeded")}
            />
            <Text style={globalStyles.errorText}>
                {touched.vpnTunnelNeeded && errors.vpnTunnelNeeded}
            </Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Network Access Required (WiFi, Cellular, ...)"
                onChangeText={handleChange("networkAccessRequired")}
                value={values.networkAccessRequired}
                onBlur={handleBlur("networkAccessRequired")}
            />
            <Text style={globalStyles.errorText}>
                {touched.networkAccessRequired && errors.networkAccessRequired}
            </Text>
            <PrevNextButtons
                onPressPrev={handlePrev}
                onPressNext={handleNext}
                prevDisabled={false}
                nextDisabled={
                    !(
                        touched.authMethod &&
                        !errors.authMethod &&
                        touched.vpnTunnelNeeded &&
                        !errors.vpnTunnelNeeded &&
                        touched.networkAccessRequired &&
                        !errors.networkAccessRequired
                    )
                }
            />
        </View>
    );
}
