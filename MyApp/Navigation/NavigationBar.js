import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const NavigationBar = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onPress}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 56,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    backButton: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonText: {
        color: '#FFFFFF',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default NavigationBar;
