

import React from 'react';
import {
  Dimensions,
  Image,
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
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;


const Search = () =>{
    return(
               <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View> 
    )
}

export default Search;

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
  

  