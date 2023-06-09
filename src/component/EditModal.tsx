import React, { useState } from "react";
import { TextInput, View, Text, Modal, StyleSheet, Pressable } from "react-native";
import { Task } from "../interface/model"
import Button from "./Button";

interface Props {
    task: Task,
    show: boolean
    setShow(show: boolean): void
}
export default function EditModal(props: Props) {
    const { task, show, setShow } = props
    // const [isPressed, setIsPressed] = useState(false);

    const [newTaskName, setNewTaskName] = useState<string>(task.taskName)
    const [newDeadline, setNewDeadline] = useState<string>(task.deadline)

    const toggleModal = () => {
        setShow(!show)
    }
    const handleEdit = () => {
        task.deadline = newDeadline
        task.taskName = newTaskName
        setShow(!show)
    }
    return (
        <Modal visible={show} animationType="fade">
            <View>
                <View style={styles.modalContent}>
                    <View>
                        <Text style={styles.modalTitle}>Edit task</Text>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}> Task: </Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={task.taskName}
                            onChangeText={setNewTaskName}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputLabel}> Deadline ...min: (s)</Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={task.deadline}
                            onChangeText={setNewDeadline}
                        />
                    </View>

                    <Button label={"Save"} theme={"primary"} icon={'pencil'} onPress={handleEdit}></Button>

                    <Button label={"Cancel"} theme={""} icon={'times'} onPress={toggleModal}></Button>
                </View>
            </View>
        </Modal >
    )
}
const styles = StyleSheet.create({
    modalContent: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,

    },
    inputLabel: {
        fontSize: 15,
        fontStyle: "italic",
    },
    input: {
        height: 60,
        width: 300,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#ccc',
        padding: 10,
    },

})