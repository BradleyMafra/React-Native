import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent: {
        padding: 10,
        width: '95%',
        height: 'auto',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    contextLeft: {
        width: '36%',
        alignItems: 'flex-start',
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBitCoin: {
        width: 40,
        height: 40,
        marginLeft: 2,
    },
    dayCotation: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 2,
        fontWeight: 'bold',

    },
    contextRight: {
        width: '60%',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default styles;