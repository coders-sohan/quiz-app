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
						uri: "https://image.freepik.com/free-vector/quiz-background-with-items-flat-design_23-2147599082.jpg",
					}}
					style={styles.banner}
					resizeMode="contain"
				/>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("Quiz")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>start</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		paddingTop: 35,
		paddingHorizontal: 15,
		backgroundColor: "#fff",
		height: "100%",
	},
	banner: {
		width: 300,
		height: 300,
	},
	bannerContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	button: {
		backgroundColor: "#2888CC",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 30,
		width: "50%",
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		borderRadius: 15,
		fontWeight: "600",
		marginBottom: 30,
	},
	buttonText: {
		color: "#ffffff",
		textAlign: "center",
		fontSize: 24,
		textTransform: "uppercase",
	},
	// textLight: {
	// 	color: '#fff'
	// },
});
