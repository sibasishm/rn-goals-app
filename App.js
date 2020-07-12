import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [allGoals, setAllGoals] = useState([]);

	const addGoalHandler = (value) => {
		setAllGoals((prev) => [
			...prev,
			{
				key: Math.random().toString(),
				value,
			},
		]);
	};

	const deleteGoalHandler = (item) => {
		setAllGoals((prev) => prev.filter(({ key }) => item !== key));
	};

	return (
		<View style={styles.conatiner}>
			<Text style={styles.title}>Goal Tracker</Text>
			<GoalInput onAddGoal={addGoalHandler} />
			<FlatList
				style={styles.list}
				data={allGoals}
				renderItem={(item) => (
					<GoalItem goal={item} deleteGoal={deleteGoalHandler} />
				)}
			/>
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
	list: {
		marginVertical: 5,
	},
});
