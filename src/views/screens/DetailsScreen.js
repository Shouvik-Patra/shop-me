import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { Colors } from '../../assets/common/common';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const { width, height } = Dimensions.get('window');

const Data = [
  { id: 1, name: 'Pizza', url: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900' },
  { id: 2, name: 'Pasta', url: 'https://b.zmtcdn.com/data/pictures/chains/7/20407/e7f282604503b2523dde0bc7bd720a6f_featured_v2.jpg' },
  { id: 3, name: 'Noodles', url: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xheysiet81o1h8zofhdm' },
];
const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const [count, setCount] = useState(1);
  const ref = useRef();
  const [put, setput] = useState(false);
  const [activeSlide, setactiveSlide] = useState(0);
  //  console.log('item@@@@@@@@@@@', item);

  const pagination = () => {
    return (
      <Pagination

        dotsLength={[...Data, { help: true }].length}
        activeDotIndex={activeSlide}

        dotStyle={{
          width: 15,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: COLORS.white
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  const _renderItem = ({ item, index }) => {
    //    console.log("itemitemitemitemitem", item);
    return (
      <View style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf: 'center',
        width: width - 80,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 10,
        shadowOffset: { width: 4, height: 4 },
      }} >

        <Image style={{ height: "100%", width: "100%", alignSelf: "center", borderRadius: 5 }} source={{ uri: item.url }} />
        {/* <Rtext style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold',alignSelf:"center"}}>
        {item.name}
      </Rtext> */}
        {/* <Rtext style={{fontFamily:Fonts.latoBold,fontSize:22,color:Colors.tranparentBlack,alignSelf:'center'}}> {item?.help ? "Frequently Asked Question" : item?.name}</Rtext> */}

      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            //  justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Carousel
            ref={ref}
            // data={Data}
            data={[...Data, { help: true }]}
            renderItem={_renderItem}
            // sliderWidth={width}
            // itemWidth={width * 0.75}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            layout={'default'}
            loop={true}
            autoPlay={true}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setactiveSlide(index)}
          />
          <View style={{ position: "absolute", paddingTop: 220 }}>
            {
              pagination()
            }
          </View>
          {/* <Image source={require('../../assets/meatPizza.png')} style={{ height: 220, width: 220 }} /> */}
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Wishlist')
                }}
              >
                <Icon name="favorite-border" color={COLORS.primary} size={25} />
              </TouchableOpacity>
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
              ₹{item.price * count}
            </Text>

          </View>


          <Text style={style.detailsText}>
            {item.desc}
          </Text>

          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton
              onPress={() => {
                navigation.navigate('order', { item: item, count: count })
              }}

              title="Add To Cart" />
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
