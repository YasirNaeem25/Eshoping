
import React from 'react';
import {
    ScrollView, StatusBar, StyleSheet, Text, Image, View, TextInput, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import AppColours from './Colour';

export default function Signup() {
    return (
        <View style={styles.MainView}>
            <StatusBar backgroundColor={'#5956E9'}></StatusBar>
            <View style={[{ flex: 2, height: 207 }, AppColours.BackColour]}>
                <View style={{ left: 160, borderBottomLeftRadius: 50 }}>
                    <Image style={{ width: 194 }} source={require('../Components/moon2.png')} />
                </View>
                <Image style={{ top: -90, left: 30 }} source={require('../Components/circle.png')} />
                <Image style={{ top: 30, left: 270 }} source={require('../Components/circle.png')} />
                <View style={styles.welcomeView}>
                    <Text style={styles.Text_Welcome}>Welcome back</Text>
                </View>
            </View>

            <View style={styles.Signup_text_view}>
                <View>
                    <Text style={styles.Text_login}>Sign Up</Text>
                </View>
                <ScrollView style={styles.View_form}>
                    <Icon color={'#5956E9'} name='user-secret' size={25} style={{ top: 10 }}></Icon>

                    <TextInput style={{ width: 250, top: -30, paddingLeft: 35, color: '#5956E9', fontWeight: 'bold', fontSize: 15, borderBottomWidth: 0.5 }}
                        placeholder='User Name' />

                    <Icon color={'#5956E9'} name='email' size={25} style={{ top: 10 }}></Icon>

                    <TextInput style={{ width: 250, top: -30, paddingLeft: 35, color: '#5956E9', fontWeight: 'bold', fontSize: 15, borderBottomWidth: 0.5 }}
                        placeholder='example@gamil.com ' />
                    <Icon color={'#5956E9'} name='locked' size={25} style={{ top: 10 }}></Icon>

                    <TextInput style={{ width: 250, top: -30, paddingLeft: 35, color: '#5956E9', fontWeight: 'bold', fontSize: 15, borderBottomWidth: 0.5 }}
                        placeholder='Password (123456789)' maxLength={9} />

                    <Icon color={'#5956E9'} name='locked' size={25} style={{ top: 10 }}></Icon>

                    <TextInput style={{
                        width: 250, top: -30,
                        paddingLeft: 35, fontWeight: 'bold', fontSize: 15, borderBottomWidth: 0.5,
                        color: '#5956E9'
                    }}
                        placeholder='Confirm Password' maxLength={9} />
                    <View style={{ height: 110 }}>
                        <TouchableOpacity style={[AppColours.button_style]}>
                            <Text style={[AppColours.button_text]}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    Signup_text_view: {

        flex: 5,
        top: 25,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    Text_login: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        top: 36,
        left: 40,
    },
    View_form: {
        width: 287,
        left: 40,
        top: 44,
        marginBottom: 100
    },
})

