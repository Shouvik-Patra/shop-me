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
import { messagePopUpClose } from "../../store/popup";

const { width } = Dimensions.get('window');
const MessgePopUp = ({ }) => {

const dispatch = useDispatch()
    const headerText = useSelector((state) => state.popup.headerText);
    const headerColor = useSelector((state) => state.popup.headerColor);
    const desc = useSelector((state) => state.popup.desc);
    const butnTxt = useSelector((state) => state.popup.butnTxt);
    const btnBackgroundColor = useSelector((state) => state.popup.btnBackgroundColor);

    return (
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <View style={{ paddingVertical: 30, width: "100%", backgroundColor: Colors.white, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10 }}>
                    <Rtext style={{ color: headerColor, fontSize: 18, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: headerColor, marginBottom: 10 }}>{headerText}</Rtext>

                    <Rtext>{desc}</Rtext>
            
                        <CusButtom onpress = {() => {
                    dispatch(messagePopUpClose())
                    }} BTNstyle={{ width: width - 80, backgroundColor: btnBackgroundColor }} text={butnTxt} ></CusButtom>
                </View>
            </View>
        </Modal>

    )
}

export default MessgePopUp;