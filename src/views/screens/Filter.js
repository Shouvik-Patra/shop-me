import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { CusButtom } from '../../CommonComponents/common/CusButtom'
import { Rtext } from '../../CommonComponents/common/Rtext'
import COLORS from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Fonts } from '../../assets/common/common'

const Data = {
    Price: ["Rs. 100 -Rs. 200, Rs. 200 -Rs. 400"],
    Brand: ["NIKE, PUMA, ADIDAS"]
}
// console.log("Datatataata====>>>",object.keys(Data));

const Filter = (navigation) => {

    const [index, setIndex] = useState(1)
  //  let arr=object.
    return (
        <SafeAreaView >
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={25} onPress={navigation.goBack} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Filter</Text>
                <Text style={{ fontSize: 14, marginLeft: 200 }}>Clear Filter</Text>
            </View>
            <View style={{ flexDirection: "row", }}>
                <ScrollView style={{ backgroundColor: COLORS.light, width: 10, padding: 15 }}>
                    <TouchableOpacity>
                        <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Price</Rtext>
                    </TouchableOpacity>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Brand</Rtext>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Customer Rating</Rtext>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Offer</Rtext>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Type</Rtext>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Availability</Rtext>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Discount</Rtext>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Category</Rtext>
                    <Rtext style={{ marginBottom: 20, fontWeight: "600" }}>Type</Rtext>
                </ScrollView>
                <ScrollView>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <CheckBox checked={index === 1} onPress={() => setIndex(1)} />
                        <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoRegular, fontSize: 12, marginLeft: 10 }}>Rs. 15000 -Rs. 20000</Rtext>

                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <CheckBox checked={index === 2} onPress={() => setIndex(2)} />
                        <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoRegular, fontSize: 12, marginLeft: 10 }}>Rs. 20000 -Rs.40000 </Rtext>

                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <CheckBox checked={index === 3} onPress={() => setIndex(3)} />
                        <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoRegular, fontSize: 12, marginLeft: 10 }}>Above 50000 +</Rtext>

                    </View>

                </ScrollView>

            </View>
            <View style={{
                marginTop: 105, height: 60, alignItems: "center", flexDirection: "row",
                justifyContent: "space-between", backgroundColor: COLORS.white
            }}>
                <View style={{ marginLeft: 10 }}>
                    <Rtext >3</Rtext>
                    <Rtext>product found</Rtext>
                </View>
                <CusButtom text={'Apply'} BTNstyle={{ width: "40%", borderRadius: 5, }}></CusButtom>
            </View>
        </SafeAreaView>
    )
}
const CheckBox = ({
    checked,
    onPress
}) => {
    // const [checked, setChecked] = useState(0);

    return (
        <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={onPress}>
            <View
                style={
                    checked ? styles.checkedSleceted : styles.checkedUnSleceted
                }>
                <Image style={{ height: 10, width: 10, alignSelf: "center", marginTop: 2 }} source={require('../../assets/icons/tk.png')}></Image>
            </View>
        </TouchableOpacity>
    );
};
export default Filter;

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    checkedSleceted: {
        height: 15,
        width: 15,
        backgroundColor: Colors.mainblue,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3
    },
    checkedUnSleceted: {
        height: 15,
        width: 15,
        backgroundColor: '#fff',
        borderColor: Colors.mainblue,
        borderWidth: 1,
        borderRadius: 3
    }
});