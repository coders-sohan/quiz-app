import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import MyStack from "./navigation";
// import Home from "./screens/home";
// import Quiz from "./screens/quiz";
// import Result from "./screens/result";

export default function App() {
	return (
		// <View style={styles.container}>
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 35,
		paddingHorizontal: 16,
	},
});
