import React, { Fragment } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native';

export default function QuotationsList() {
    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {alert('Function in development ')}}>
                    <Text style={styles.textButtonQuery}>7 D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {alert('Function in development')}}>
                    <Text style={styles.textButtonQuery}>15 D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {alert('Function in development ')}}>
                    <Text style={styles.textButtonQuery}>1 M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {alert('Function in development ')}}>
                    <Text style={styles.textButtonQuery}>3 M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => {alert('Function in development ')}}>
                    <Text style={styles.textButtonQuery}>6 M</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}