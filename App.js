import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	const [inputGoal, setInputGoal] = useState('');
	const [allGoals, setAllGoals] = useState([]);
	return (
		<View>
			<View>
				<Text>Goal Tracker</Text>
				<TextInput
					placeholder='Add Goal'
					value={inputGoal}
					onChangeText={(text) => setInputGoal(text)}
				/>
				<Button
					title='+ Add'
					onPress={() => setAllGoals((prev) => prev.push(inputGoal))}
				/>
			</View>
			<View>
				{allGoals.length > 0 ? (
					allGoals.map((goal, index) => (
						<Text key={`goal-${index}`}>{goal}</Text>
					))
				) : (
					<Text>No goals added yet.</Text>
				)}
			</View>
		</View>
	);
}
