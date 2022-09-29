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
import { inputPopupClose } from "../../store/popup";
 const TextInputPopUp = () => {

    const dispatch = useDispatch();
    const headerText = useSelector((state) => state.popup.headerText);
    const cancelButtonText = useSelector((state) => state.popup.cancelButtonText);
    const continueButtonText = useSelector((state) => state.popup.continueButtonText);
    const textInputFuctionType = useSelector((state) => state.popup.textInputFuctionType);

    return (
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <View style={{ paddingVertical: 30, width: "100%", backgroundColor: Colors.white, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10 }}>
                    <Rtext style={{ color: Colors.primaryColor, fontSize: 18, alignSelef: 'center', marginBottom: 10 }}>{headerText}</Rtext>
                    <View style={{ width: '100%', height: 1, backgroundColor: Colors.primaryColor, marginTop: 5 }} />
                    <View style={{ width: "100%", marginTop: 10 }}>
                        <Rtext>{headerText}</Rtext>
                    </View>

                    <Ainput placeholder={"Message"} style={{ height: 200, textAlignVertical: "top" }} multiline={true} />
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", width: '100%' }}>
                        <CusButtom onpress = {() => dispatch(inputPopupClose())} text={cancelButtonText} BTNstyle={{ width: "45%" }} />
                        <CusButtom    onpress = {() => {
                            if(textInputFuctionType === "type1"){
                                Alert.alert("ApiCall")
                                dispatch(inputPopupClose())
                            }

                            if(textInputFuctionType === "type2"){
                                Alert.alert("ApiCall2")
                                dispatch(inputPopupClose())
                            }

                            if(textInputFuctionType === "type23"){
                                Alert.alert("ApiCall3")
                                dispatch(inputPopupClose())
                            }
                        }} text={continueButtonText} BTNstyle={{ width: "45%" }} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default  TextInputPopUp