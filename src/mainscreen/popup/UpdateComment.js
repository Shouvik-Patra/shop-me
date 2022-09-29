import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';

import { Colors } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';
import { CusButtom } from '../../CommonComponents/common/CusButtom';
import { Ainput } from '../../CommonComponents/common/Ainput';
import { useDispatch, useSelector } from 'react-redux';
import { postMsg, singleMsg, updateMsg } from '../../store/message';
import moment from 'moment';
import { setToastMsg } from '../../store/popup';
const { width } = Dimensions.get('window');
const UpdateComment = ({setReply,reply, messageData,  index, setUpdateReply,updateReply, setShowModal, showModal, userId }) => {
  const userTokenInfo = useSelector(state => state.auth.userTokenInfo);
//   console.log('============usertoken========', userTokenInfo);
  const dispatch = useDispatch()
  const [messge, stMessage] = useState("")
  return (
    <Modal isVisible={showModal} backdropColor={Colors.tranparentBlack}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{
            paddingVertical: 30,
            backgroundColor: Colors.lightSilver,
            width: '100%',
            backgroundColor: Colors.white,
            paddingHorizontal: 20,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <TouchableOpacity onPress={() => setShowModal(false)} style={{ position: 'absolute', top: 10, right: 10 }}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/cancel.png')}
            />
          </TouchableOpacity>
          <Rtext
            style={{
              marginTop: 10,
              color: Colors.mainblue,
              fontSize: 18,
              alignSelf: 'center',
              borderBottomWidth: 1,
              borderBottomColor: Colors.mainblue,
              marginBottom: 10,
            }}>
            {'Update message'}
          </Rtext>
          <Ainput
            multiline={true}
            style={{ height: 100, textAlignVertical: 'top' }}
            placeholder={'Messages'}
            value={updateReply}
            onChangeText={setUpdateReply}
          />
          <View
            style={{
              borderRadius: 13,
              marginTop: 15,
              backgroundColor: Colors.mainblue,
            }}>
            <CusButtom
              onpress={() => {
                if (updateReply === '') {
                dispatch(setToastMsg('Please Enter the Message'))
                return
                }
                let newReply = [...reply]
                newReply.splice(index, 1, {
                    message: updateReply,
                    userName: userTokenInfo.username,
                    userid: userTokenInfo.userId,
                    assid: null,
                    tlid: null,
                    date: moment().format('DD/MM/YYYY'),
                    userSeen: true,
                    assSeen: false,
                    tlSeen: false,
                    imgulr: null,
                    profilePic: null,
                    userType: userTokenInfo.role,
                    edit: true,
                  })
                //   return 
                dispatch(
                  updateMsg({
                    id: messageData?._id,
                    data: {
                      ...messageData,
                      reply: newReply,
                    },
                  }),
                ).then(() => {
                  dispatch(
                    singleMsg({
                      id: messageData?._id,
                    }),
                  ).then(res => {
                   setUpdateReply("")
                    setReply(res.payload.reply);

                    setShowModal(false)
                  });
                });
           
              }}
              BTNstyle={{
                width: width - 80,
                marginTop: 2,
                backgroundColor: Colors.mainblue,
                marginBottom: 2,
                marginHorizontal: 2,
              }}
              text={'Submit'}></CusButtom>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UpdateComment;
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: Colors.mainblue,
  },
});
