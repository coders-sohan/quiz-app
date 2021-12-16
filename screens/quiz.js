import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Quiz = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.question}>
				<Text>Test question</Text>
			</View>
			<View style={styles.options}>
				<TouchableOpacity>
					<Text>Option 01</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Option 02</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Option 03</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Option 04</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bottom}>
				<TouchableOpacity>
					<Text>SKIP</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>NEXT</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Result")}>
					<Text>END</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Quiz;

const styles = StyleSheet.create({
	container: {
		padding: 12,
		height: "100%",
	},
	question: {
		marginVertical: 15,
	},
	options: {
		marginVertical: 15,
		flex: 1,
	},
	bottom: {
		marginBottom: 12,
		paddingVertical: 15,
		justifyContent: "space-between",
		flexDirection: "row",
	},
});
