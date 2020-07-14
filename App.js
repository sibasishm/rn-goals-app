import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [allGoals, setAllGoals] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const addGoalHandler = (value) => {
		setAllGoals((prev) => [
			...prev,
			{
				key: Math.random().toString(),
				value,
			},
		]);
		setIsModalVisible(false);
	};

	const deleteGoalHandler = (item) => {
		setAllGoals((prev) => prev.filter(({ key }) => item !== key));
	};

	const cancelHandler = () => {
		setIsModalVisible(false);
	};

	return (
		<View style={styles.conatiner}>
			<Text style={styles.title}>Goal Tracker</Text>
			<Button
				title='Add New Goal'
				onPress={() => {
					setIsModalVisible(true);
				}}
			/>
			<GoalInput
				onAddGoal={addGoalHandler}
				onCancel={cancelHandler}
				isModalVisible={isModalVisible}
			/>
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
		marginVertical: 10,
	},
	list: {
		marginVertical: 15,
	},
});
