import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const CardMarket = ({ title, description, image, price, id }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        overflow: "hidden",
        height: 100,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
    },
    content: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
    },
});
