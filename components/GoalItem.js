import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const GoalItem = ({ goal, deleteGoal }) => {
	const {
		item: { key, value },
		index,
	} = goal;
	return (
		<TouchableNativeFeedback onPress={() => deleteGoal(key)}>
			<View style={styles.listItemContainer}>
				<Text style={styles.listItem}>{`${index + 1}. ${value}`}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	listItem: {
		fontSize: 16,
		fontWeight: '400',
	},
	listItemContainer: {
		marginVertical: 5,
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: '#f0f0f0',
		borderColor: '#0f0f0f',
		borderWidth: 1,
	},
});

export default GoalItem;
