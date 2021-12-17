import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Quiz App</Text>
		</View>
	);
};

export default Title;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 36,
		color: "#2888CC",
		fontWeight: "bold",
	},
});
