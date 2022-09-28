import  Toast  from 'react-native-simple-toast';
import { Dimensions, Platform, PixelRatio, Linking } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const {
    width: SCREEN_WIDTH,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const normalizeSize = (size: number,lgSize: number = 0,smSize: number=0) => {

    if (SCREEN_WIDTH >= 600)
        size = (lgSize != 0 ? lgSize : size) - 2;
    else if(SCREEN_WIDTH <= 330)
        size = (smSize != 0 ? smSize : size) - 1;

    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export const openUrl = (url:string) => {

    if(url && url.trim() != ''){
        url = url.trim();
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
            Linking.openURL(url);
            } else {
            console.log("Don't know how to open URI: " + url);
            }
        });
    }
}

export const capitalize = (s: string) => {
    if (s == '')
        return '';
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

export const fieldToLebel = (field: string) => {
    field = field.replace(/_/g, ' ');
    field = field.toUpperCase();
    return field;
}

export const showServerValidationError = (response:object) => {
    let errorMessage: any = '';
    for (const [key, value] of Object.entries(response)) {
        errorMessage += '* '+fieldToLebel(key)+' '+value+'\n';
    }
    errorMessage = errorMessage.replace(/\n+$/,'');
    showFlashMessage(errorMessage, '', 'danger');
}

export const showYupFormValidationError = (errors: object) => {
    let errorMessage: any = '';
    for (const [key, value] of Object.entries(errors)) {
        errorMessage += '* '+value.message+'\n';
    }
    errorMessage = errorMessage.replace(/\n+$/,'');
    // if (errorMessage != '')
    // Toast.show(errorMessage , Toast.LONG)
      //  showFlashMessage(errorMessage, "", 'danger');
}

// export const showFlashMessage = (message: string = '', description: string = '', type: string = 'info',onPress=()=>{},duration= 2000) => {
//     // showMessage({
//     //     message: message,
//     //     description: description,
//     //     type: type,
//     //     onPress,
//     //     duration
//     // });
// };



export const showFlashMessage = (
    message = '',
    description = '',
    success = false,   
  ) => {
    console.log(message, description);
    showMessage({
      message: message,
      description: description,
      backgroundColor:success ? "#4EB810" : "red", 
      color: "#fff",
      duration : 3000,
      titleStyle :{
          fontSize : 17
      }
    });
  };


  export const baseUrl = "https://motionless-duck-shirt.cyclic.app"