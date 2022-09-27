import React from 'react';
import {Text} from 'react-native';
import { Fonts } from '../../../assets/common/common';
import { normalizeSize } from '../../../utility/MyUtility';


const Rtext = ({style={},normalizeFontSize=0,fontSize=14.5,lgFontSize=0,smFontSize=0,fontStyle='normal',children, color="#353535",fontWeight="normal",numberOfLines=0 , onPress =null}) => {

    const cusStyle = {
        fontStyle,
        color,
        fontSize:normalizeFontSize == 0 ? normalizeSize(fontSize,lgFontSize,smFontSize) : normalizeFontSize,
        fontWeight,
    }
    return(
        <Text onPress = {onPress} style={{...styles.default,...cusStyle,...style}}  numberOfLines={numberOfLines} >
            {children}
        </Text>
    )
};

const styles = {
    default: {
        fontFamily : Fonts.latoRegular,
        fontSize : 14,
    }
}

export {Rtext};

