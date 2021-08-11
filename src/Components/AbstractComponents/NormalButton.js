import React from "react"
import { View, Text, TouchableOpacity} from "react-native"
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const NormalButton = ({ btnText, iconName,btnStyle,iconLibraryName, btnTextColor, BtnPress, backgrClr, btnTextSize, iconSize, btnBorderRadius, btnHeight, btnWidth, iconColor, btnborderWidth, btnborderColor, btnOpacity, icon }) => {
    return (


        <TouchableOpacity
            onPress={BtnPress}
            activeOpacity={btnOpacity}
            style={{ width: btnWidth, height: btnHeight, backgroundColor: backgrClr, justifyContent: "center", alignItems: "center", borderRadius: btnBorderRadius, borderWidth: btnborderWidth, borderColor: btnborderColor }}>


              {btnStyle == "Text_Only"?

                  <Text style={{ color: btnTextColor, fontSize: btnTextSize }}>{btnText}</Text>  //1st btnstyle

                  : btnStyle == "Icon_Only"?   //2nd btnstyle

                  <View style={{justifyContent: "center", alignItems: "center" }}>
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

                    : btnStyle == "Text_and_Icon"?   //3rd btnstyle

                    <View style={{width:"60%",height:"100%",flexDirection:"row"}}>  
                        <View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>    
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

                        <View style={{width:"80%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                               <Text style={{color: btnTextColor, fontSize: btnTextSize}}>{btnText}</Text>
                        </View> 

                    </View>
                    :null
                 }
                

        </TouchableOpacity>


    )
}



export default NormalButton