import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { TodoWork } from "../interface/model";
import Button from "./Button"
interface Props {
    task: TodoWork,
    handleCompletedTask(completedTask: string): void
    handleEditTask(task: TodoWork): void
}

export default function TodoListItem(props: Props) {

    const { task, handleCompletedTask } = props;
    return (
        <View style={styles.todoListItem}>
            <Text style={styles.taskInfo}>{task.taskName} </Text>
            <Text style={styles.taskInfo}> {task.deadline} hours</Text>
            <View>
                <Button icon='check' label="Done" theme="primary"
                    onPress={() => handleCompletedTask(task.taskName)}></Button>
                <Button icon='pencil' label="Edit" theme="secondary"
                    onPress={() => handleCompletedTask(task.taskName)}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoListItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",

    },
    taskInfo: {
        fontSize: 16,
        fontWeight: "bold",
        width: '40%',
    },
    btnDelete: {
        backgroundColor: "red",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
})