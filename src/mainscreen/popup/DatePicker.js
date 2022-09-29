
import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { View, StyleSheet, } from 'react-native';
import Modal from 'react-native-modal';
import { CusButtom } from "../../CommonComponents/common/CusButtom";
const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { Colors, Fonts } from '../../assets/common/common';
const DatePickerr = ({ modalVisble, onDateChange, selectedDate, BtnTxt, onSubmit, projectDate = false }) => {
    var startdate = moment();
    let min_date = moment().subtract(40, 'years');
    let Project_date = new Date()
    return (
        <Modal
            isVisible={true}
            backdropOpacity={1}
            onBackdropPress={() => {
                modalVisble(false)
            }}
            backdropColor="#00000029"

        >
            <View style={styles.modalMainView}>

                <DatePicker
                    mode="date"
                    date={selectedDate}
                    androidVariant={Platform.OS === 'ios' ? 'iosClone' : 'nativeAndroid'}
                    onDateChange={onDateChange}
                />

                <CusButtom onpress={() => {

                    modalVisble(false)
                }} BTNstyle={{ width: width - 60, backgroundColor: Colors.primaryColor, paddingHorizontal: 10, alignSelf: "center", paddingVertical: 15 }} text={"Submit"}></CusButtom>
            </View>
        </Modal>
    )

}

export default DatePickerr;

const styles = StyleSheet.create({
    modalMainView: {
        justifyContent: 'flex-start',
        backgroundColor: Colors.white,
        width: width * 0.9,
        borderRadius: 5,
        padding: 20,
    },
    btnTxt: {
        fontSize: 20,
        alignItems: "center",
        textAlign: 'center',
        color: Colors.mainblue,
        fontFamily: Fonts.LatoBold
    },
    btnStyle: {
        padding: 10,
        borderWidth: 2,
        width: 150,
        alignSelf: 'center',
        borderRadius: 30,
        borderColor: Colors.mainblue
    }
})