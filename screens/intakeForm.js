import React, { useState } from "react";
import { TextInput, View, Text, Linking } from "react-native";
import { Formik, yupToFormErrors } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import StepOne from "./intakeSteps/stepOne";
import StepTwo from "./intakeSteps/stepTwo";
import StepThree from "./intakeSteps/stepThree";
import StepFour from "./intakeSteps/stepFour";
import StepFive from "./intakeSteps/stepFive";
import StepSix from "./intakeSteps/stepSix";
import StepSeven from "./intakeSteps/stepSeven";
import StepEight from "./intakeSteps/stepEight";
import StepNine from "./intakeSteps/stepNine";
import StepTen from "./intakeSteps/stepTen";
import qs from "qs";

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const intakeSchema = yup.object({
    appTeamContactInfo: yup
        .string()
        .required("Team Contact is a required field"),
    appName: yup.string().required("Application Name is a required field"),
    appSponsorName: yup.string().required("Sponsor Name is a required field"),
    appSponsorEmail: yup
        .string()
        .email("Sponsor Email must be a valid email")
        .required("Sponsor Email is a required field"),
    appSponsorPhoneNumber: yup
        .string()
        .matches(phoneRegExp, "Sponsor's Phone must be a valid phone number")
        .required("Sponsor Phone is a required field"),
    appIdentifier: yup
        .string()
        .required("Application Identifier is a required field"),
    authMethod: yup
        .string()
        .required("Authentication Method is a required field"),
    vpnTunnelNeeded: yup.string().required("VPN Tunnel is a required field"),
    networkAccessRequired: yup
        .string()
        .required("Network Access Required is a required field"),
    networkPorts: yup.string().required("Network Ports is a required field"),
    targetDeviceModels: yup
        .string()
        .required("Target Device Models is a required field"),
    securityScansCompleted: yup
        .string()
        .required("What Security Scans Completed is a required field"),
    deploymentDate: yup.date().required("Deployment Date is required field"),
    releaseCycle: yup.string().required("Release Cycle is required field"),
    endUserGroups: yup.string().required("End Users is a required field"),
    numberOfEndUsers: yup
        .number()
        .required("Number of End Users is a required field"),
    mandatoryApplication: yup
        .string()
        .required("Application Mandatory is a required field"),
    addedSecurityStandards: yup
        .string()
        .required("Security Standard Added is a required field"),
});

const getDateString = (selectedDate) => {
    let year = selectedDate.getFullYear().toString();
    let month = (selectedDate.getMonth() + 1).toString();
    month = month.length < 2 ? "0" + month : month;
    let date = selectedDate.getDate().toString();
    date = date.length < 2 ? "0" + date : date;
    return year + "-" + month + "-" + date;
};

const sendEmail = async (body) => {
    let to = body.appSponsorEmail;
    let url = `mailto:${to}`;
    let subject = "New app has been added for review";

    const query = qs.stringify({
        subject: subject,
        body: JSON.stringify(body),
        cc: "",
        bcc: "",
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error("Provided URL can not be handled");
    }

    return Linking.openURL(url);
};

export default function IntakeForm({ addApp }) {
    const [step, setStep] = useState(1);
    const handleNext = () => {
        setStep(step + 1);
    };
    const handlePrev = () => {
        setStep(step - 1);
    };
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    appTeamContactInfo: "",
                    appName: "",
                    appSponsorName: "",
                    appSponsorEmail: "",
                    appSponsorPhoneNumber: "",
                    appDescription: "",
                    appType: [
                        { title: "Public Store App", checked: false },
                        { title: "Internal / Custom App", checked: false },
                        { title: "Web link", checked: false },
                    ],
                    appSource: [
                        { title: "Google Play", checked: false },
                        { title: "iTunes", checked: false },
                        { title: "Internal Repository", checked: false },
                    ],
                    appIdentifier: "",
                    networkPorts: "",
                    phoneManufacturer: [
                        { title: "Android", checked: false },
                        { title: "iOS", checked: false },
                        { title: "Sonim", checked: false },
                    ],
                    targetDeviceModels: "",
                    authMethod: "",
                    vpnTunnelNeeded: "",
                    networkAccessRequired: "",
                    functionalTesting: [
                        { title: "Impact On Battery", checked: false },
                        { title: "Impact On Memory", checked: false },
                        { title: "Impact On Storage", checked: false },
                        {
                            title: "Impact On Device Performance",
                            checked: false,
                        },
                        {
                            title: "Accessibility Testing (Section 508)",
                            checked: false,
                        },
                    ],
                    securityScansCompleted: "",
                    uatSucceeded: [
                        { title: "Yes", checked: false },
                        { title: "No", checked: true },
                    ],
                    deploymentDate: getDateString(new Date()),
                    releaseCycle: "",
                    pilotDeployment: [
                        { title: "Yes", checked: false },
                        { title: "No", checked: true },
                    ],
                    endUserGroups: "",
                    numberOfEndUsers: "",
                    mandatoryApplication: "",
                    addedSecurityStandards: "",
                    additionalComments: "",
                    rating: "",
                }}
                validationSchema={intakeSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                    addApp(values);
                    sendEmail(values);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    touched,
                    handleSubmit,
                    values,
                    errors,
                }) => (
                    <View>
                        {step === 1 && (
                            <StepOne
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 2 && (
                            <StepTwo
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 3 && (
                            <StepThree
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 4 && (
                            <StepFour
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 5 && (
                            <StepFive
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 6 && (
                            <StepSix
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 7 && (
                            <StepSeven
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 8 && (
                            <StepEight
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 9 && (
                            <StepNine
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        )}
                        {step === 10 && (
                            <StepTen
                                values={values}
                                touched={touched}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handlePrev={handlePrev}
                                handleSubmit={handleSubmit}
                            />
                        )}
                    </View>
                )}
            </Formik>
        </View>
    );
}
