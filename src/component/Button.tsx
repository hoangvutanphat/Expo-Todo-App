import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface Props {
    label: string
    theme: string
    icon: any
    onPress: () => void
}

export default function Button(props: Props) {
    const { label, theme, icon, onPress } = props
    if ("primary" === theme) {
        return (
            <Pressable style={[styles.button, styles.primary]}
                onPress={onPress}>
                <FontAwesome
                    name={icon}
                    size={18}
                    color="#fff" />
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        )
    }
    else {
        return (
            <Pressable style={[styles.button, styles.secondary]}
                onPress={onPress}>
                <FontAwesome
                    name={icon}
                    size={18}
                    color="#fff" />
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        textAlign: 'center',
        padding: 3,
        margin: 2
    },
    primary: {
        backgroundColor: '#00DFA2',
    },
    secondary: {
        backgroundColor: '#FFE7A0',
    },
    text: {
        padding: 10,
        fontSize: 20,
        color: '#fff'
    }

})