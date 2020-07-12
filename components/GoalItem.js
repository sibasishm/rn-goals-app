import React from 'react';
import { Text, StyleSheet } from 'react-native';

const GoalItem = ({ goal }) => {
	const { item, index } = goal;
	return <Text style={styles.listItem}>{`${index + 1}. ${item.value}`}</Text>;
};

const styles = StyleSheet.create({
	listItem: {
		fontSize: 16,
		fontWeight: '400',
		marginVertical: 2,
	},
});

export default GoalItem;
