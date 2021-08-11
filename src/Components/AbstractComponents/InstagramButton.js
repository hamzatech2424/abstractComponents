import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';





const InstagramButtonCompo = ({ btnWidth, btnHeight, backgrClr,btnTextColor,btnTextSize,btnText,iconSize,iconLibraryName,iconName,iconColor ,btnBorderRadius, btnborderWidth, btnborderColor, BtnPress, btnOpacity }) => {
    return (
        <TouchableOpacity
            onPress={BtnPress}
            activeOpacity={btnOpacity}
            style={{ width: btnWidth, height: btnHeight, backgroundColor: backgrClr, justifyContent: "center", alignItems: "center", borderRadius: btnBorderRadius, borderWidth: btnborderWidth, borderColor: btnborderColor }}>

            <View style={{  width: "70%", height: "70%", flexDirection: "column" }}>

                <View style={{ height: "70%", width: "100%",justifyContent:"center",alignItems:"center" }}>

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


                <View style={{ height: "30%", width: "100%",alignItems:"center" }}>
                <Text style={{color: btnTextColor, fontSize: btnTextSize}}>{btnText}</Text>
                </View>

            </View>




        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

})


export default InstagramButtonCompo