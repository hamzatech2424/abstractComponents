import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const PasswordTextInputCompo = ({ statevalue, setStateFunc, psdtxtInpuStyle, iconLibraryName,psdtxtInBorderRadius,iconColor,iconName, iconSize,psdtxtInBackgroundColor, psdtxtInHeight, psdtxtInWidth, psdtxtInTextColor, psdtxtInPlaceHolderTextcolor, psdtxtInIconColor }) => {

    const [hidePass, setHidePass] = useState(true);

    return (

        <React.Fragment>

            {psdtxtInpuStyle == "Text_Only" ?

                <View style={{ width: psdtxtInWidth, height: psdtxtInHeight, flexDirection: "row", backgroundColor: psdtxtInBackgroundColor,borderRadius:psdtxtInBorderRadius }}>
                    <View style={{ height: "100%", width: "80%" }}>


                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={psdtxtInPlaceHolderTextcolor}
                            secureTextEntry={hidePass ? true : false}
                            style={{
                                height: "100%",
                                width: "100%",
                                padding: 0,
                                paddingLeft: 10,
                                borderRadius: psdtxtInBorderRadius,
                                color: psdtxtInTextColor
                            }}
                            value={statevalue}
                            onChangeText={setStateFunc}
                        />


                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setHidePass(!hidePass)}
                        style={{ height: "100%", width: "20%", justifyContent: "center", alignItems: "center" }}>

                        <Icon
                            name={hidePass ? 'eye-off' : 'eye'}
                            color={psdtxtInIconColor}
                            size={22}
                        />

                    </TouchableOpacity>

                </View>

                : psdtxtInpuStyle == "Text_and_Icon" ?

                    <View style={{ width: psdtxtInWidth, height: psdtxtInHeight, flexDirection: "row", backgroundColor: psdtxtInBackgroundColor,borderRadius: psdtxtInBorderRadius}}>
                        <View style={{width:"15%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                        {iconLibraryName == "Entypo" ?
                      <Entypo name={iconName} color={iconColor} size={iconSize} />
                      : iconLibraryName == "FontAwesome" ?
                          <FontAwesome name={iconName} color={iconColor} size={iconSize} />
                          : iconLibraryName == "MaterialCommunityIcons" ?
                              <MaterialCommunityIcons name={iconName} color={iconColor} size={iconSize} />
                              : iconLibraryName == "MaterialIcons" ?
                                  <MaterialIcons name={iconName} color={iconColor} size={iconSize} />
                                  : iconLibraryName == "Ionicons" ?
                                      <Ionicons name={iconName} color={iconColor} size={iconSize} />
                                      : null}

                        </View>
                        <View style={{ height: "100%", width: "65%" }}>


                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={psdtxtInPlaceHolderTextcolor}
                                secureTextEntry={hidePass ? true : false}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    padding: 0,
                                    paddingLeft: 10,
                                    borderRadius: psdtxtInBorderRadius,
                                    color: psdtxtInTextColor
                                }}
                                value={statevalue}
                                onChangeText={setStateFunc}
                            />


                        </View>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setHidePass(!hidePass)}
                            style={{ height: "100%", width: "20%", justifyContent: "center", alignItems: "center" }}>

                            <Icon
                                name={hidePass ? 'eye-off' : 'eye'}
                                color={psdtxtInIconColor}
                                size={22}
                            />

                        </TouchableOpacity>

                    </View> : null}

        </React.Fragment>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default PasswordTextInputCompo