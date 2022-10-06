import React from 'react'
import { View, Text } from 'react-native'

const orderdetails = () => {
    return (
        <View>
            <Text>koushik</Text>
        </View>
    )
}

export default orderdetails


const RowWiseTxt = ({txt1 , txt2}) =>{
    return(
      <View style = {{flexDirection :'row' , alignItems :'center', justifyContent :'space-between'}}>
        <Text>{txt1}</Text>
        <Text>{txt2}</Text>
      </View>
    )
  }
