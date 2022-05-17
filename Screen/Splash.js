
import React from 'react';

import {
    StatusBar,
    StyleSheet,
    Text,

    Image,
    View,

    TouchableOpacity,

} from 'react-native';
import AppColours from './Colour';

export default function Splash() {
    return (
        <View style={styles.MainView}>
            <StatusBar backgroundColor={'#5956E9'}></StatusBar>
            <View style={[{ flex: 2, height: 207 }, AppColours.BackColour]}>
                <View style={styles.welcomeView}>
                    <Text style={styles.Text_Welcome}>Find your Gadget</Text>
                </View>
                <View style={{ left: -20 }}>       
                        <Image style={{ width: 380, top: 135}} source={require('../Components/splashimg.png')} />
                </View>
                <View style={{ height: 110, top: 125, left: 50 }}>
                    <TouchableOpacity style={[AppColours.button_style, { backgroundColor: '#ffffff' }]}>
                        <Text style={[AppColours.button_text, { color: '#5956E9', left: 70, top: 15, fontWeight: '600' }]}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: '#5956E9'
    },
    welcomeView: {
        position: 'absolute',
        width: 302,
        height: 126,
        left: 50,
        top: 69,
    },
    Text_Welcome: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontStyle: 'normal',
    },



})

