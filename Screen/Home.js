
import React, { useState, useEffect } from 'react';
import {
    ScrollView, StatusBar, StyleSheet, Text, Image, View, TextInput, TouchableOpacity, FlatList
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColours from './Colour';
export default function Home() {

    const [Data, SetData] = useState('')

    const [url1, seturl] = useState('')

    const [category, setcategory] = useState('')

    useEffect(() => {
        FetchDataFomApi();
        Select_category();
    }, [])

    function FetchDataFomApi() {
        fetch("https://fakestoreapi.com/products/categories", {
            method: "GET",
        }).then((res) => res.json())
            .then((response) => {
                SetData(response)

            }).catch((error) => {
                console.log(error)
            })
        // console.log(Data)
    }

    function Select_category(value) {
        console.log("======>", value)
        if (value != null) {
            let url = "https://fakestoreapi.com/products/category/"
            const seturl = url + value;

            console.log("======>", seturl)

            fetch(seturl, { method: "Get" }).then((res) => res.json())
                .then((response) => {
                    setcategory(response)
                    console.log(category)

                }).catch((error) => {
                    console.log(error)
                })

        }
        else {


            fetch('https://fakestoreapi.com/products/category/jewelery', {

                method: "GET",
            }).then((res) => res.json())
                .then((response) => {
                    setcategory(response)

                }).catch((error) => {
                    console.log(error)
                })

        }
    }


    return (
        <View style={[AppColours.Home_Colour, { flex: 1 }]}>
            <StatusBar backgroundColor={'#F2F2F2'} />
            <View style={{ top: 20, left: 30, width: 60 }}>
                <Icon name='segment' size={34} />
            </View>
            <View style={styles.View_Text_order}>
                <Text style={styles.Text_Order_style}>
                    Order online collect in store
                </Text>
            
            </View>

            <View style={{ height: 50, top: 180, left: 20, width: 300 }}>
                <FlatList
                    horizontal={true}
                    data={Data}
                    renderItem={(detail) => {
                        return (
                            <TouchableOpacity onPress={() => Select_category(detail.item)} >
                                <Text style={{
                                    fontSize: 17, padding: 10, fontWeight: '600',
                                    textTransform: 'capitalize'
                                }}>
                                    {detail.item}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                >
                </FlatList>
            </View>

            <View style={{ height: 450, top: 180, left: 40, paddingRight: 20 }}>
                <FlatList
                    horizontal={true}
                    data={category}
                    renderItem={(detail) => {
                        return (
                            <TouchableOpacity style={{ padding: 20 }} >
                                <View style={styles.List_Items}>
                                    <View style={styles.view_title_text}>
                                        <Text style={styles.title_text} >{detail.item.title} </Text>
                                    </View>
                                </View>
                                <View style={styles.View_price_text}>
                                    <Text style={styles.price_text} >${detail.item.price} </Text>
                                </View>
                                <View style={{ top: -60, height: 20, width: 50, left: 70 }}>
                                    {console.log(detail.item.rating.rate)}
                                    <Rating
                                        type='star'
                                        startingValue={detail.item.rating.rate}
                                        imageSize={20}
                                    />

                                </View>
                                <Image style={{ top: -300, left: 20, height: 140, width: 140, borderRadius: 150 }}
                                    source={{ uri: detail.item.image }}>
                                </Image>
                            </TouchableOpacity>
                        )
                    }}
                >
                </FlatList>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({

    View_Text_order: {
        position: 'absolute',
        width: 243,
        height: 80,
        left: 50,
        top: 102
    },
    Text_Order_style: {
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 40,
        fontFamily: 'normal',
        color: '#000000'

    },
    view_title_text: {
        top: 100,
        left: 41,
        width: 138,
        //   backgroundColor: 'red',
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 14,
        // alignItems:'center',
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 20,
    },

    View_price_text: {
        Top: 125,
        left: 70,
    },
    price_text: {
        color: '#5956E9',
        fontSize: 17,
        fontWeight: 'bold',
    },
    List_Items: {
        top: 50, height: 270,
        backgroundColor: '#FFFFFF',
        width: 220, borderRadius: 20, right: 20

    },



})

