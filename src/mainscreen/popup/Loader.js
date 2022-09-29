import React, { useEffect, useState } from "react";
import {
    View, SafeAreaView, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Alert, Text
} from "react-native";

import { Colors, Fonts } from "../../assets/common/common";
import Modal from "react-native-modal";


const { width } = Dimensions.get('window');
const Loader = ({ setShowModal, selectedData }) => {
    return (
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack} >
            {/* <View style={{ backgroundColor: "#fff", width: 80, height: 80, alignItems: 'center', justifyContent: "center", alignSelf: 'center', borderRadius: 15 }}> */}
                <View style={{ backgroundColor: "#fff", borderColor : Colors.lightSilver , borderWidth : 1, elevation: 4, width: 60, height: 60, alignItems: 'center', justifyContent: "center", alignSelf: 'center', borderRadius: 30 }}>
                    <ActivityIndicator size={'large'} color={Colors.mainblue} />
                </View>
            {/* </View> */}
        </Modal>

    )
}

export default Loader;

