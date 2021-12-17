import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Quiz = ({ navigation }) => {
	const [questions, setQuestions] = useState();
	const [ques, setQues] = useState(0);

	const getQuiz = async () => {
		const url =
			"https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data.results[0]);
		setQuestions(data.results);
	};

	useEffect(() => {
		getQuiz();
	}, []);

	return (
		<View style={styles.container}>
			{questions && (
				<View style={styles.parent}>
					<View style={styles.question}>
						<Text style={styles.questionText}>Q. {questions.question}</Text>
					</View>
					<View style={styles.options}>
						<TouchableOpacity style={styles.optionButton}>
							<Text style={styles.optionText}>Option 01</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionButton}>
							<Text style={styles.optionText}>Option 02</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionButton}>
							<Text style={styles.optionText}>Option 03</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionButton}>
							<Text style={styles.optionText}>Option 04</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.bottom}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>SKIP</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>NEXT</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => navigation.navigate("Result")}
						>
							<Text style={styles.buttonText}>END</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
};

export default Quiz;

const styles = StyleSheet.create({
	container: {
		paddingTop: 35,
		paddingHorizontal: 15,
		backgroundColor: "#fff",
		height: "100%",
	},
	parent: {
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
	questionText: {
		fontSize: 34,
		fontWeight: "bold",
	},
	optionText: {
		fontSize: 18,
		color: "#ffffff",
	},
	optionButton: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		marginVertical: 5,
		backgroundColor: "#2888CC",
		borderRadius: 15,
	},
	button: {
		backgroundColor: "#2888CC",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 30,
		width: "30%",
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 15,
		fontWeight: "600",
		marginBottom: 20,
	},
	buttonText: {
		color: "#ffffff",
		textAlign: "center",
		fontSize: 20,
		textTransform: "uppercase",
	},
});
