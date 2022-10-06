import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import {PrimaryButton} from '../components/Button';
import RazorpayCheckout from 'react-native-razorpay';

const order = ({navigation}) => {
  const makePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://cdn-icons-png.flaticon.com/800/7207/7207388.png',
      currency: 'INR',
      key: 'rzp_test_GQvvt2m7UTpdIw', // Your api key
      amount: '15000',
      name: 'ATLC Group',
      prefill: {
        email: 'test@gmail.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    })
    // .catch((error) => {
    //   // handle failure
    //   alert(`Error: ${error.code} | ${error.description}`);
    // });
  }
  const [count,setCount]=useState(0);
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.status}</Text>
        </View>
        <View style={{marginRight:15,marginTop:40}}>
          <View style={style.actionBtn}>
            <TouchableOpacity
            onPress={() => {
              if (count === 0) {
                setCount(0);
              } else {
                setCount(count - 1);
              }
            }}>
            {/* <Icon name="remove" size={25} color={COLORS.white} /> */}
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold',color:COLORS.white, fontSize: 12,}}>QTY : 5</Text>
            <TouchableOpacity onPress={()=>{
              setCount(count+1)
            }}>
            {/* <Icon name="add" size={25} color={COLORS.white} /> */}
            </TouchableOpacity>
          </View>
          {/* <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.status}</Text> */}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Order</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton 
              onPress={makePayment} title="CHECKOUT" />
            </View>
          </View>
        )}
      />
      
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 150,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 20,
    elevation: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    
  },
});

export default order;

