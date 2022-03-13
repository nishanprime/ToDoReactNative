import { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [goal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addToGoals = (goalToAdd) => {
    setGoals([...goals, goalToAdd]);
    setEnteredGoal('');
  };
  const deleteItem = (itemToDel) => {
    const newGoals = goals.filter((goal) => goal !== itemToDel);
    setGoals(newGoals);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={goal}
          style={styles.inputField}
          placeholder="Add Goals"
          onChangeText={(text) => setEnteredGoal(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            addToGoals(goal);
          }}
        />
      </View>

      {goals.length === 0 ? (
        <View style={styles.addNewGoals}>
          <Text>Add new Goals</Text>
        </View>
      ) : (
        <FlatList
          style={{ height: '80%' }}
          data={goals}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity onLongPress={() => deleteItem(item)}>
              <Text style={styles.listItem}>
                {index + 1}. {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 10,
    margin: 10,
  },
  listItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  addNewGoals: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
