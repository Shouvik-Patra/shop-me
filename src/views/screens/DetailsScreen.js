import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';





const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const [count, setCount] = useState(1);

 
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>

        <View style={{ marginBottom: 10, marginLeft: 30 }}>
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.white }}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>


          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', marginRight: 20 }}>
            <View style={style.actionBtn}>
              <TouchableOpacity
                onPress={() => {
                  if (count === 1) {
                    return
                  } else {
                    setCount(count - 1);
                  }
                }}>
                <Icon name="remove" size={25} color={COLORS.primary} />
              </TouchableOpacity>
              <Text
                style={{ fontWeight: 'bold', color: COLORS.primary, fontSize: 18 }}>
                {count}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                }}>
                <Icon name="add" size={25} color={COLORS.primary} />
              </TouchableOpacity>
            </View>

            <Text
              style={{ fontWeight: 'bold', color: COLORS.white, fontSize: 18 }}>
              {" ̥₹ ̥ 1100"}
            </Text>

          </View>


          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>

          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton
              onPress={makePayment} title="Add To Cart" />
          </View>

        </View>
      </ScrollView>
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
  details: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  actionBtn: {
    width: 120,
    height: 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
});

export default DetailsScreen;
