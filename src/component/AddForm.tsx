import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView } from 'react-native';
import TodoListItem from './TodoListItem';
import { useState, createContext } from 'react';
import { Task } from '../interface/model';
import React from 'react';



export default function AddForm() {

    const [taskName, setTaskName] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")
    const [todoList, setTodoList] = useState<Task[]>([])

    const task = { taskName: taskName, deadline: deadline }


    const addTask = () => {
        setTodoList([...todoList, task])
        setTaskName("")
        setDeadline("")
    }

    const handleCompleteTask = (taskCompleted: string) => {
        setTodoList(todoList.filter(works => works.taskName != taskCompleted))
    }
    //const TaskContext = createContext({ task, handleCompleteTask })
    return (
        // <TaskContext.Provider value={{ task, handleCompleteTask }}>
        <View>
            <View style={styles.workField}>
                <Text style={styles.headerWorkField}>Todo APP</Text>
                <View>
                    <TextInput
                        style={styles.inputWorkField}
                        placeholder='Work to do'
                        value={taskName}
                        onChangeText={text => setTaskName(text)}>
                    </TextInput>
                    <TextInput
                        style={styles.inputWorkField}
                        placeholder='Deadline ( ... mins)'
                        value={deadline}
                        onChangeText={(text) => setDeadline(text)}>
                    </TextInput>
                </View>
                <Pressable
                    style={styles.btnAdd}
                    onPress={addTask}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#fff" }}>ADD</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.listItem}>
                {todoList.map((task: Task, key: number) => {
                    return <TodoListItem
                        task={task}
                        key={key}
                        handleCompletedTask={handleCompleteTask}
                    />
                })}
            </ScrollView>
        </View>
        // </TaskContext.Provider>
    )
}
const styles = StyleSheet.create({
    workField: {
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
        fontStyle: 'italic',
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
        marginHorizontal: 20,
    }
});
