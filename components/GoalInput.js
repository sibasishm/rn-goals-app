import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
	const [goalInput, setGoalInput] = useState('');
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder='Add Goal'
				value={goalInput}
				onChangeText={(text) => setGoalInput(text)}
			/>
			<Button
				title='+ Add'
				onPress={() => {
					onAddGoal(goalInput);
					setGoalInput('');
				}}
				disabled={!goalInput}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		marginVertical: 5,
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
	},
});

export default GoalInput;
