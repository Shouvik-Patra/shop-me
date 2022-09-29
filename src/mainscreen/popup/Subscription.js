import React, { useEffect, useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Alert, Text
} from "react-native";

import { Colors, Fonts } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import Modal from "react-native-modal";
import { BlurView } from "@react-native-community/blur";
import { CusButtom } from "../../CommonComponents/common/CusButtom";
import { Ainput } from "../../CommonComponents/common/Ainput";
import { request } from "../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { commentsApi, emptyAllData, HomeTodosApi, HomeTodosApi1, Api2 } from "../../store/home";
import { userLogoutSuccess } from "../../store/auth";
import { messagePopUpClose } from "../../store/popup";

const { width } = Dimensions.get('window');
const Subscription = ({setShowModal , selectedData}) => {
    return (
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack} >
            <View style={{ flex: 1, justifyContent: 'center', borderRadius: 10, }}>
                <View style={{ paddingVertical: 30, backgroundColor: Colors.white, borderRadius: 30, backgroundColor: Colors.black, }}>
                <CusButtom onpress={() => {
                            setShowModal(false)
                        }} BTNstyle={{ position : 'absolute' , top : 10 , right : 20 ,paddingHorizontal : 5 , paddingVertical : 5 }} text={"Premium"}></CusButtom>

                    <Rtext style={ {marginLeft : 30 , color : Colors.white , fontFamily : Fonts.latoBold , marginBottom : 20, fontSize : 18 , width : 180}}>{selectedData.name}</Rtext>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 30, }}>
                        <Image source={require('../../assets/icons/subscription.png')} style={{ height: 50, width: 50, resizeMode: 'contain', }} />
                        <View>
                            <Rtext style={{}}>StartUp</Rtext>
                            <Rtext>24/Month</Rtext>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                        <Image source={require('../../assets/icons/tick.png')} style={{ height: 25, width: 25, resizeMode: 'contain'  }} />

                        <Rtext style={{}}>All Feture in Basic   </Rtext>

                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                        <Image source={require('../../assets/icons/tick.png')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />

                        <Rtext style={{}}>All Feture in Basic</Rtext>

                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                        <Image source={require('../../assets/icons/tick.png')} style={{ height: 20, width: 25, resizeMode: 'contain', }} />

                        <Rtext style={{}}>All Feture in Basic</Rtext>

                    </View>

                    <View >


                        <CusButtom onpress={() => {
                            setShowModal(false)
                            // dispatch(messagePopUpClose())
                        }} BTNstyle={{ width: width - 100, backgroundColor: Colors.mainblue, paddingHorizontal: 10, alignSelf: "center" , paddingVertical : 20 }} text={"Choose Plan"}></CusButtom>
                    </View>


                </View>
            </View>
        </Modal>

    )
}

export default Subscription;

