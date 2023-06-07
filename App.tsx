import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import TodoListItem from './component/TodoListItem';
import { useState } from 'react';
import { TodoWork } from './interface/model';
export default function App() {
  const [tasks, setTasks] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<TodoWork[]>([])

  const addTask = () => {
    const work = { taskName: tasks, deadline: deadline }
    setTodoList([...todoList, work])
    setTasks("")
    setDeadline(0)
  }

  const handleCompleteTask = (taskCompleted: string) => {
    setTodoList(todoList.filter(works => works.taskName != taskCompleted))
  }
  const handleEditTask = (taskNeedEdit: TodoWork) => { }
  return (
    <View style={styles.container}>
      <View style={styles.workField}>
        <Text style={styles.headerWorkField}>Todo APP</Text>
        <View>
          <TextInput
            style={styles.inputWorkField}
            placeholder='Work to do'
            value={tasks}
            onChangeText={text => setTasks(text)}>
          </TextInput>
          <TextInput
            style={styles.inputWorkField}
            placeholder='Deadline ( ... hrs)'
            value={deadline.toString() + '  hours  '}
            onChangeText={(number) => setDeadline(parseFloat(number))}>
          </TextInput>
        </View>
        <Pressable
          style={styles.btnAdd}
          onPress={addTask}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ADD</Text>
        </Pressable>
      </View>

      {/*Send task info, create list of TodoWork*/}
      <ScrollView style={styles.listItem}>
        {todoList.map((task: TodoWork, key: number) => {
          return <TodoListItem task={task} key={key}
            handleCompletedTask={handleCompleteTask}
            handleEditTask={handleEditTask} />
        })}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'center',

  },
  workField: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#AEE2FF',
    padding: 10,
    marginBottom: 5,
  },
  headerWorkField: {
    fontSize: 60,
    color: '#2B2A4C',
    margin: 10,
  },
  inputWorkField: {
    height: 40,
    width: 300,
    borderWidth: 2,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#ECF8F9',
    borderColor: '#ECF8F9',

  },
  btnAdd: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#F9E0BB',
    borderColor: '#9DB2BF',
    textAlign: 'center',
  },
  listItem: {
  }
});
