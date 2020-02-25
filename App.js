import React, { Component } from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native"
import * as firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

const config = {

}

firebase.initializeApp(config)


export default class App extends Component {
	state = {
		title: "",
		author: ""
	}

	save() {
		firebase.auth().signInWithCustomToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJud250dUhHdTFDUVowY1RKbmJadlZ1RlFLTXgxIiwiaWF0IjoxNTgyNjQwMjQ1LCJleHAiOjE1ODI2NDM4NDUsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaXNzIjoiZmlyZWJhc2UtYWRtaW5zZGstcDRsOHhAb25saW5lcmVzZXJ2YXRpb24tMmx4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstcDRsOHhAb25saW5lcmVzZXJ2YXRpb24tMmx4LmlhbS5nc2VydmljZWFjY291bnQuY29tIn0.apch3OL6b2B3XktFHgz0YGfdfVTSBrhZKyb_vkvdVGedzNyK5svMr_XvBxJLfVJJdXK7t2bNl5YAp7p_uaZ2qwa0ARTl_Otto-_stT8hs1dMdZSS6j_wWBRLSIrYte_eWz5RhXiX8w4Eg7A9AkH3wQWrQR7ZjsKMZ8nktWWy_R9E24HK2Dbkpq1h9iedzg17hPYYmaavPGzFzUuHjIvqKnMZh9f7caBeOQLA_-xLIqeOA4ZkST1Rk0-BMjf34CCUP-81Oda9xRjYu8DBHCv0uPvGl0CwqVrbhLgBwjVERLYxULfy1eggWPNJxW6qf4AQ8ofu6c-dqpb_tbxZNMDxjQ')
		.then(e => console.log(e))
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(JSON.stringify(error))
			// ...
		});
		console.log({auth})
		
		/* const firestore = firebase.firestore().collection("Jots").doc("note");
		firestore.set({name:"pradeep"}) //The yellow warning is popped up in this line.
		.then(function() {
			console.log("Document successfully written!");
			})
			.catch(function(error) {
				console.error("Error writing document: ", error);
			}); */
	
	}

	render() {
		const { title, author } = this.state

		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						value={title}
						placeholder='Title of the book'
						style={styles.textInput}
						onChangeText={value => this.setState({ title: value })}
					/>
					<TextInput
						value={author}
						placeholder='Name of the Author'
						style={styles.textInput}
						onChangeText={value => this.setState({ author: value })}
					/>
					<Button onPress={() => this.save()} title='Add the book' color='#841584' />
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF"
	},
	inputContainer: {
		margin: 30
	},
	textInput: {
		height: 30,
		textAlign: "center",
		color: "#333333",
		marginBottom: 10,
		fontSize: 24,
		borderWidth: 1,
		borderBottomColor: "#111111"
	}
})
