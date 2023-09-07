import React from "react";
import styles from "./style";
import { View, Text } from "react-native";




export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>5,54423,355</Text>
            <Text style={styles.textPrice}>Last quotation</Text>
        </View>
    )
}