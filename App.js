import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
} from 'react-native';

export default function App() {
	const [inputGoal, setInputGoal] = useState('');
	const [allGoals, setAllGoals] = useState([]);
	return (
		<View style={styles.conatiner}>
			<View>
				<Text style={styles.title}>Goal Tracker</Text>
				<TextInput
					style={styles.input}
					placeholder='Add Goal'
					value={inputGoal}
					onChangeText={(text) => setInputGoal(text)}
				/>
				<Button
					title='+ Add'
					onPress={() => {
						setAllGoals(() => [...allGoals, inputGoal]);
						setInputGoal('');
					}}
					disabled={!inputGoal}
				/>
			</View>
			<ScrollView style={styles.list}>
				{allGoals.length > 0 ? (
					allGoals.map((goal, index) => (
						<Text style={styles.listItem} key={`goal-${index}`}>{`${
							index + 1
						}. ${goal}`}</Text>
					))
				) : (
					<Text>No goals added yet.</Text>
				)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	conatiner: {
		padding: 25,
		marginTop: 25,
		flex: 1,
	},
	title: {
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'center',
	},
	input: {
		marginVertical: 5,
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
	},
	list: {
		marginVertical: 5,
	},
	listItem: {
		fontSize: 16,
		fontWeight: '400',
		marginVertical: 2,
	},
});
