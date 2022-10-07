import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { useRef } from "react";
import BottomSheet from "react-native-gesture-bottom-sheet";

import { useState, useEffect } from 'react';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { Colors, Fonts } from '../../assets/common/common';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;


const Search = () => {
  const bottomSheet = useRef();
  const [radio, setradioValue] = useState(' ');
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
        {/* //////////////Bottom Sheet for SORT BY=======================>>>>>>>>>>> */}
        <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
          
        <Rtext
              style={{
                fontFamily: Fonts.latoBold,
                fontSize: 14,
                marginLeft:10
              }}>
              SORT BY
            </Rtext>
            <View
              style={{ height: 1, backgroundColor: Colors.silver, marginTop: 5 }}
            />
            <RadioButton
              setradioValue={setradioValue}
              arrlist={[
                'Relevance',
                'Popularity',
                'Price -- Low to High',
                'Price -- High to Low',
                'Newest First',
              ]}
              bottomSheet={bottomSheet}
             // setModal={setModalVisible}
            />
          </BottomSheet> 
        
        
      
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '1%',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>

        <View style={styles.button}>
          <TouchableOpacity
             onPress={() => bottomSheet.current.show()}>
          

            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginRight: 20,
              }}
              source={require('../../assets/icons/sorting.png')
              }
            />
            <Rtext>Sort</Rtext>
          </TouchableOpacity>
          

        </View>
        <View style={styles.button}>
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
              marginRight: 20,
            }}
            source={require('../../assets/icons/filter.png')
            }
          />
          <Rtext>Filter</Rtext>
        </View>

      </View>
    </ScrollView>
  )
}
const RadioButton = ({
  arrlist = [],
  selectedValue,
  bottomSheet,
  setradioValue,
}) => {
  const [isSelectedIndex, setIsselectedIndex] = useState(-1);

  return (
    <View>
      {arrlist.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              bottomSheet.current.close();
            }, 800);
            setradioValue(item);
            setIsselectedIndex(index);
          }}
          style={{ flexDirection: 'row', marginTop: 10, justifyContent:"space-between",paddingHorizontal:10 }}>
          <Rtext>{item}</Rtext>
          <Image
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
              marginRight: 20,
              marginLeft:20,
            }}
            source={
              index === isSelectedIndex
                ? require('../../assets/icons/radioon.png')
                : require('../../assets/icons/radiooff.png')
            }
          />
          
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
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
  button: {
    width: '50%', height: 40, borderBottomColor: "#808080", borderTopColor: "#808080", borderBottomWidth: 1, borderTopWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"
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


