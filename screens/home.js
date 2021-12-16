import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/title";

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Title />
			<View style={styles.bannerContainer}>
				<Image
					source={{
						uri: "https://image.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg",
					}}
					style={styles.banner}
					resizeMode="contain"
				/>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
				<Text>start</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		paddingTop: 35,
		paddingHorizontal: 15,
		// backgroundColor: "#000",
		// color: "#fff",
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
	// textLight: {
	// 	color: '#fff'
	// },
});
