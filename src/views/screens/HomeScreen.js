import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getallproduct } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const [scollVal, setScollVal] = useState(0);
  const [showSearch, setShowSearch] = useState(true);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const ref = useRef();
  const [scrolled, setScrolled] = useState(true);
  const dispatch = useDispatch()
  const data = useSelector(state => state.product.getallproduct);
  console.log('********data************',data);
  useEffect(() => {
    dispatch(getallproduct())
  }, [])




  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 35, width: 35, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({ food }) => {
    console.log('food&&&&&&&&&&&&&',food);
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={style.card}>
          <View style={{ alignItems: 'center', top: 0 }}>
            <Image source={require('../../assets/meatPizza.png')} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {food.price}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            ₹ {food.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Image
          source={require('../../assets/icons/apps.png')}
          style={{
            // backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 50,
          }}></Image>
        <View
          style={{
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            padding: 10,
            borderRadius: 50,
            flexDirection: 'row',
          }}>
          <Image source={require('../../assets/placeholder.png')}></Image>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.dark }}>
            32 Ramkrishna Road,Kolkata
          </Text>
          <Image
            style={{ tintColor: COLORS.primary }}
            source={require('../../assets/down-arrow.png')}></Image>
        </View>
        <View
          style={{
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 50,
            padding: 5,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.white }}>
            JS
          </Text>
        </View>
      </View>
      {showSearch && (
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <View style={style.inputContainer}>
            <Icon name="search" size={25} />
            <TextInput
              style={{ flex: 1, fontSize: 12 }}
              placeholder="Search for food"
            />
          </View>
          <View style={style.sortBtn}>
            <Icon name="tune" size={28} color={COLORS.white} />
          </View>
        </View>
      )}

      {/* <FlatList
        ref={ref}
        onScroll={e => {
          console.log(
            'event.nativeEvent.contentOffset.y',
            e.nativeEvent.contentOffset.y,
          );

          setScollVal(e.nativeEvent.contentOffset.y);

          if (e.nativeEvent.contentOffset.y > scollVal) {
            setShowSearch(false);
          } else {
            setShowSearch(true);
          }
        }}
        // onScroll = (event) => {
        //   const scrollOffset = event.nativeEvent.contentOffset.y
        // }
        ListHeaderComponent={() => (
          <View>
            <ImageBackground
              source={require('../../assets/banner1.jpg')}
              imageStyle={{ borderRadius: 15 }}
              style={{
                width: '100%',
                height: 110,
                marginTop: 10,
                paddingHorizontal: 15,
                marginLeft: 15,
              }}></ImageBackground>
            <ListCategories />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <Card food={item} />}
      /> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    elevation: 15,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
