import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function QuotationItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logoBitCoin} source={require("../../../img/logoBitCoinRemove.png")}/>
                    <Text style={styles.dayCotation}>17/02/2002</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53331.052</Text>
            </View>
        </View>
    )
}