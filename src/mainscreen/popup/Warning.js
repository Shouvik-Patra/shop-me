import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";



const Warning = () => {
    return (
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
                <View style={{ width: "100%", height: 800, paddingHorizontal: 20, marginTop: 50 }}>
                    <View style={{ width: "100%", height: 60, backgroundColor: 'black' }}>
                        <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 20, fontWeight: 'bold' }}>
                            WARENTY
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: "100%", height: 380, backgroundColor: 'ghostwhite' }}>

                        <Image source={require('../image/warrenty.png')} style={{ height: 80, width: 80, resizeMode: 'contain' }} />
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
                            45 DAYS LEFT
                        </Text>
                        <Text style={{ color: 'silver' }}>
                            you have no time thats is your
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 15, marginTop: 30 }}>
                                LEARN MORE
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={{ backgroundColor: "darkturquoise", paddingVertical: 10, paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                                    Submit Claim
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 150, width: '100%', backgroundColor: 'floralwhite', paddingHorizontal: 20 }}>
                        <View Style={{}}>
                            <Text Style={{}}>card Use for the Purchase</Text>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row', }}>
                            <View>
                                <Image source={require('../image/bank.png')} style={{ height: 40, width: 50 }} />
                            </View>
                            <View style={{ paddingLeft: 15 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
                                    CITIBANK DOUBLE
                                </Text>
                                <Text style={{ fontSize: 12 }} >
                                    please choose
                                </Text>
                            </View>
                            <View style={{ marginLeft: 40, marginTop: 40 }}>
                                <TouchableOpacity>
                                    <View style={{ backgroundColor: "floralwhite", paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>
                                            change
                                        </Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default Warning;
