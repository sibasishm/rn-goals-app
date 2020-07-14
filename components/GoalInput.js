import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal, onCancel, isModalVisible }) => {
	const [goalInput, setGoalInput] = useState('');
	return (
		<Modal visible={isModalVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='Add Goal'
					value={goalInput}
					onChangeText={(text) => setGoalInput(text)}
				/>
				<View style={styles.buttonContainer}>
					<Button title='Cancel' onPress={onCancel} color='red' />
					<Button
						title='+ Add'
						onPress={() => {
							onAddGoal(goalInput);
							setGoalInput('');
						}}
						disabled={!goalInput}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	input: {
		width: '80%',
		marginVertical: 10,
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		width: '60%',
		flexDirection: 'row-reverse',
		justifyContent: 'space-around',
	},
});

export default GoalInput;
