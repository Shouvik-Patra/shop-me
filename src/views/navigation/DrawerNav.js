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
// import { Colors } from '../assets/common/common';
// import { Rtext } from '../CommonComponents/common/Rtext';
import {Rtext} from '../../CommonComponents/common/Rtext'
// import { userLogoutSuccess } from '../Store/auth';
import StackNav from './StackNav';
import { Colors } from '../../assets/common/common';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    const dispatch = useDispatch()
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={props => (
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        // source={require('../../assets/images/bg.png')}
                        style={{ paddingVertical: 30 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image
                                    // source={require('../../assets/icons/avatar.png')}
                                    style={{
                                        borderColor: '#808080',
                                        height: 40,
                                        width: 40,
                                        alignSelf: 'baseline',
                                        marginLeft: 10,
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
                        title="Profile"
                        // source={require('../../assets/icons/avatar.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="User Information"
                        // source={require('../../assets/icons/userinfo.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="User Status"
                        // source={require('../../assets/icons/status.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="Completion"
                        // source={require('../../assets/icons/complete.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="Settings"
                        // source={require('../../assets/icons/settings.png')}
                    ></DrawerItem>
                    <DrawerItem
                        onPress={() => props.navigation.closeDrawer()}
                        title="Share"
                        // source={require('../../assets/icons/share.png')}
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
        <TouchableOpacity>
            <View>
                <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center" }}>
                    <View style={{ width: 60, marginLeft: 10 }}>
                        {/* <Image source={source} style={{ width: 30, height: 30, tintColor: Colors.primaryColor }}></Image> */}
                    </View>
                    <Text>{title}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: Colors.lightSilver, width: "90%", marginTop: 8, alignSelf: "center" }}></View>
            </View>
        </TouchableOpacity>
    )
}