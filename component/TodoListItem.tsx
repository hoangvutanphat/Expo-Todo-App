import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal, TextInput } from "react-native";
import { Task } from "../interface/model";
import Button from "./Button"
import EditModal from "./EditModal"

interface Props {
    task: Task,
    handleCompletedTask(completedTask: string): void
}

export default function TodoListItem(props: Props) {
    const { task, handleCompletedTask } = props;

    const [stateShow, setStateShow] = useState(false)

    const toggleModal = () => { setStateShow(!stateShow) }

    return (
        <View style={styles.todoListItem}>
            <Text style={styles.taskInfo}>{task.taskName} </Text>
            <Text style={styles.taskInfo}> {task.deadline} min(s)</Text>
            <View>
                <Button icon='check' label="Done" theme="primary"
                    onPress={() => handleCompletedTask(task.taskName)}></Button>
                <Button icon='pencil' label="Edit" theme="secondary"
                    onPress={toggleModal}></Button>
                <EditModal task={task} show={stateShow} setShow={setStateShow} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoListItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        justifyContent: "center",
    },
    taskInfo: {
        fontSize: 16,
        fontWeight: "bold",
        width: "35%",
    },
})