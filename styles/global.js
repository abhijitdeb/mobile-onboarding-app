import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    titleText: {
        fontSize: 18,
        color: "#333",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        paddingHorizontal: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 20,
        borderRadius: 6,
        textAlignVertical: "top",
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginHorizontal: 10,
        marginBottom: 5,
        alignSelf: "center",
    },
    copyRightText: {
        fontSize: 18,
        color: "#333",
        alignSelf: "center",
    },
});
