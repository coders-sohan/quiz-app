import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Result = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text>This is result page</Text>
			</View>
			<View style={styles.bannerContainer}>
				<Image
					source={{
						uri: "https://image.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg",
					}}
					style={styles.banner}
					resizeMode="contain"
				/>
			</View>
			<View>
				<TouchableOpacity onPress={() => navigation.navigate("Home")}>
					<Text>Home</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Result;

const styles = StyleSheet.create({
	container: {
		padding: 12,
		height: "100%",
	},
	banner: {
		width: 300,
		height: 300,
	},
	bannerContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
});
