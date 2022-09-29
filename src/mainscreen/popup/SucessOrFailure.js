import React, { useEffect, useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Alert
} from "react-native";

import { Colors } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import Modal from "react-native-modal";
import { BlurView } from "@react-native-community/blur";
import { CusButtom } from "../../CommonComponents/common/CusButtom";
import { Ainput } from "../../CommonComponents/common/Ainput";
import { request } from "../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { commentsApi, emptyAllData, HomeTodosApi, HomeTodosApi1, Api2 } from "../../store/home";
import { userLogoutSuccess } from "../../store/auth";
import { setSucessFailerClose } from "../../store/popup";

 const SucessOrFailure = ({ isflag = false}) => {
    const dispatch = useDispatch()
    const successFailureheaderTxt = useSelector((state) => state.popup.successFailureheaderTxt);
    const successFailureContent = useSelector((state) => state.popup.successFailureContent);
    return (
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <View style={{ paddingVertical: 30, width: "100%", backgroundColor: Colors.white, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10 }}>
                    <Rtext style={{ color: isflag ? Colors.green : Colors.red, fontSize: 18, alignSelef: 'center', marginBottom: 10 }}>{successFailureheaderTxt}</Rtext>
                    <View style={{ width: '100%', height: 1, backgroundColor: isflag ? Colors.green : Colors.red, marginTop: 5 }} />


                    <Image style={{ height: 60, width: 60, resizeMode: 'contain', tintColor: isflag ? Colors.green : Colors.red, marginVertical: 20 }}

                        source={isflag ? require('../../assets/icons/success.png') : require('../../assets/icons/fail.png')}

                    />
                    {/* <Rtext style={{ fontSize: 13, alignSelef: 'center', marginBottom: 10  }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Rtext> */}
                    <Rtext style={{ fontSize: 13, alignSelef: 'center', marginBottom: 10  }}>{successFailureContent}</Rtext>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", width: '100%' }}>
                        <CusButtom onpress={() => dispatch(setSucessFailerClose())} text={"Ok"} BTNstyle={{ width: "80%", backgroundColor : isflag ?  Colors.green  : Colors.red }} />

                    </View>
                </View>
            </View>
        </Modal>

    )

}



export default SucessOrFailure; 