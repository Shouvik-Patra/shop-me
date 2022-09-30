import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';

import { useDispatch } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Rtext} from '../../CommonComponents/common/Rtext'
// import { userLogoutSuccess } from '../Store/auth';
import StackNav from './StackNav';
import { Colors } from '../../assets/common/common';
import COLORS from '../../consts/colors';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    const dispatch = useDispatch()
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={props => (
                <View style={{ flex: 1 }}>
                    <ImageBackground
                         source={require('../../assets/bg2.jpg')}
                        style={{ paddingVertical: 20 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image
                                     source={require('../../assets/person.png')}
                                    style={{
                                        borderColor: '#808080',
                                        height: 50,
                                        width: 50,
                                        alignSelf: 'baseline',
                                        marginLeft: 10,
                                        borderRadius:50
                                    }}
                                ></Image>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                <Rtext style={{ color: Colors.white, fontSize: 12 }}>
                                    Shouvik Patra
                                </Rtext>
                                <Rtext style={{ color: Colors.white, fontSize: 12 }}>
                                    patra.shouvik95@gmail.com
                                </Rtext>
                            </View>
                        </View>
                    </ImageBackground>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="All Categories"
                         source={require('../../assets/icons/apps.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="Trending Store"
                        source={require('../../assets/icons/store.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="Offer Zone"
                         source={require('../../assets/icons/price-tag.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="My Order"
                         source={require('../../assets/icons/shopping-bag.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="Coupones"
                         source={require('../../assets/icons/coupon.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="My Cart"
                         source={require('../../assets/icons/cart.png')}
                    ></DrawerItem>
                     <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="My Wishlist"
                         source={require('../../assets/icons/wishlist.png')}
                    ></DrawerItem>
                     <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="My Account"
                        source={require('../../assets/icons/prof.png')}
                    ></DrawerItem>
                     <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="My Notification"
                         source={require('../../assets/icons/bell.png')}
                    ></DrawerItem>
                     <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="Help Centre"
                        source={require('../../assets/icons/helpline.png')}
                    ></DrawerItem>
                    <View
                        style={{ position: 'absolute', bottom: 20, left: 0, width: '100%' }}
                    >
                        <DrawerItem
                            onPress={() => {
                                props.navigation.closeDrawer();

                                setTimeout(() => {
                                    dispatch(userLogoutSuccess())
                                }, 500);

                            }}
                            title="Logout"
                            // source={require('../../assets/icons/logout.png')}
                        ></DrawerItem>
                    </View>
                </View>
            )}
        >
            <Drawer.Screen name="StackNav" component={StackNav} />
        </Drawer.Navigator>
    );
};
export default DrawerNav;

// const HomeScreen = () => {
//     return (
//         <TouchableOpacity >
//             <View style={{ flexDirection: 'row' }}>
//                 <Text style={{ fontSize: 50 }}>Click for Details Page</Text>
//             </View>
//         </TouchableOpacity>
//     );
// }

const DrawerItem = ({ source, title = "" }) => {
    return (
        <TouchableOpacity >
            <ImageBackground
            source={require('../../assets/bg1.jpg')}>
                <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center" }}>
                    <View style={{ width: 60, marginLeft: 10 }}>
                       <Image source={source} style={{ width: 25, height: 25, tintColor: COLORS.primary }}></Image> 
                    </View>
                    <Text>{title}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: Colors.lightSilver, width: "90%", marginTop: 8, alignSelf: "center" }}></View>
            </ImageBackground>
        </TouchableOpacity>
    )
}