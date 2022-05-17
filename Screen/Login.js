
import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
    TextInput,
    TouchableOpacity,

} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AppColours from './Colour';

export default function Login() {
    return (
        <View style={styles.MainView}>
            <StatusBar backgroundColor={'#5956E9'}></StatusBar>
            <View style={[{ flex: 2,height:207},AppColours.BackColour]}>
                <View style={{ left: 160, borderBottomLeftRadius: 50 }}>
                    <Image style={{ width: 194 }} source={require('../Components/moon2.png')} />
                </View>
                <Image style={{ top: -90, left: 30 }} source={require('../Components/circle.png')} />
                <Image style={{ top: 50, left: 270 }} source={require('../Components/circle.png')} />
                <View style={styles.welcomeView}>
                    <Text style={styles.Text_Welcome}>Welcome back</Text>
                </View>
            </View>

            <View style={styles.Signup_text_view}>
                <View>
                    <Text style={styles.Text_login}>Log In</Text>
                </View>
                <ScrollView style={styles.View_form}>
                    <Icon name='email' size={25} style={{ top: 10 }}></Icon>

                    <TextInput style={{ width: 250, top: -30, paddingLeft: 35, fontWeight: 'bold', fontSize: 15, borderBottomWidth: 0.5 }}
                        placeholder='example@gamil.com ' />
                    <Icon name='key' size={25} style={{ top: 10 }}></Icon>

                    <TextInput style={{ width: 250, top: -30, paddingLeft: 35, fontWeight: 'bold', fontSize: 15, borderBottomWidth: 0.5 }}
                        placeholder='Password' maxLength={9} />
                    <TouchableOpacity  >
                        <Text style={[{fontWeight: 'bold', top: -10 },AppColours.App_Text_Blue]}>Forgot Password</Text>
                    </TouchableOpacity>
                    <View style={{ height: 110 }}>
                        <TouchableOpacity style={[AppColours.button_style]}>
                            <Text style={[AppColours.button_text]}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                  
                        <TouchableOpacity style={{  width: 250, height: 60}} >
                            <Text style={[{left: 64, fontWeight: 'bold',fontSize:17, top: 10 },AppColours.App_Text_Blue]}>
                                create Account
                            </Text>
                        </TouchableOpacity>
                
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
        flex: 4,
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
        top: 64,
        marginBottom: 100
    },
})

