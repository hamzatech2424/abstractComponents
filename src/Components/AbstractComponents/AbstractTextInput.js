import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';




const AbstractTextInput = ({ statevalue, setStateFunc,txtInpuIcon,txtInpuType, txtInHeight,psdtxtInIconColor ,txtInBackgroundColor, txtInWidth, txtInBorderRadius, txtInTextColor, txtInplacholdertext, txtInPlaceHolderTextcolor }) => {

    const [hidePass, setHidePass] = useState(true);

    const textInputSetterFunction = () => {
        return null
    }

    const textInputHeight = txtInHeight ? txtInHeight : "10%"
    const textInputWidth = txtInWidth ? txtInWidth : "80%"
    const textInputBackgroundColor = txtInBackgroundColor ? txtInBackgroundColor : "grey"
    const textInputPlaceholderText = txtInplacholdertext ? txtInplacholdertext : "placeholder"
    const textInputPlaceholderTextColor = txtInPlaceHolderTextcolor  ?txtInPlaceHolderTextcolor : "white"
    const textInputBorderradius = txtInBorderRadius  ? txtInBorderRadius : 0
    const textInputTextColor = txtInTextColor ? txtInTextColor : "white"
    const textInputValue = statevalue ? statevalue : ""
    const textInputSetter = setStateFunc ? setStateFunc : textInputSetterFunction()
    const textInputIcon = txtInpuIcon ? txtInpuIcon : false
    const textInputIconColorEye = psdtxtInIconColor ? psdtxtInIconColor : "black"
   

    return (


        <React.Fragment>

{txtInpuType == "Text_Only" ?

                <View style={{ backgroundColor: textInputBackgroundColor, width: textInputWidth, height: textInputHeight, borderRadius: textInputBorderradius }}>
                    <TextInput
                        placeholder={textInputPlaceholderText}
                        placeholderTextColor={textInputPlaceholderTextColor}
                        style={{
                            height: "100%",
                            width: "100%",
                            paddingLeft: 10,
                            color: textInputTextColor,
                        }}
                        value={textInputValue}
                        onChangeText={textInputSetter}
                    />
                </View>

: txtInpuType == "Text_and_Icon" ?



                <View style={{ backgroundColor: textInputBackgroundColor, width: textInputWidth, height: textInputHeight, flexDirection: "row", borderRadius: textInputBorderradius }}>
                    <View style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center" }}>

                        {textInputIcon? txtInpuIcon() : <Text>Add Icon</Text>} 

                    </View>

                    <View style={{ width: "85%", height: "100%", borderTopRightRadius: textInputBorderradius, borderBottomRightRadius: textInputBorderradius }}>

                            <TextInput
                                placeholder={textInputPlaceholderText}
                                placeholderTextColor={textInputPlaceholderTextColor}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    paddingLeft: 10,
                                    color: textInputTextColor,
                                }}
                                value={textInputValue}
                                onChangeText={textInputSetter}
                            />

                    </View>

                </View>
                    
                    
                    
: txtInpuType == "Password_TextInput" ?


                <View style={{ width: textInputWidth, height: textInputHeight, flexDirection: "row", backgroundColor: textInputBackgroundColor,borderRadius:textInputBorderradius }}>
                    <View style={{ height: "100%", width: "80%" }}>


                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={textInputPlaceholderTextColor}
                            secureTextEntry={hidePass ? true : false}
                            style={{
                                height: "100%",
                                width: "100%",
                                padding: 0,
                                paddingLeft: 10,
                                borderRadius: textInputBorderradius,
                                color: textInputTextColor
                            }}
                            value={textInputValue}
                            onChangeText={textInputSetter}
                        />


                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setHidePass(!hidePass)}
                        style={{ height: "100%", width: "20%", justifyContent: "center", alignItems: "center" }}>

                        <Ionicons
                            name={hidePass ? 'eye-off' : 'eye'}
                            color={textInputIconColorEye}
                            size={22}
                        />

                    </TouchableOpacity>

                </View>



: txtInpuType == "Password_TextInput_and_Icon" ?
                      

                 <View style={{ width: textInputWidth, height: textInputHeight, flexDirection: "row", backgroundColor: textInputBackgroundColor,borderRadius: textInputBorderradius}}>
                    <View style={{width:"15%",height:"100%",justifyContent:"center",alignItems:"center"}}>

                       {textInputIcon? txtInpuIcon() : <Text>Add Icon</Text>} 

                </View>
                <View style={{ height: "100%", width: "65%" }}>


             <TextInput
                 placeholder="Password"
                 placeholderTextColor={textInputPlaceholderTextColor}
                 secureTextEntry={hidePass ? true : false}
                   style={{
                   height: "100%",
                   width: "100%",
                   padding: 0,
                   paddingLeft: 10,
                   borderRadius: textInputBorderradius,
                   color: textInputTextColor
                    }}
                  value={textInputValue}
                  onChangeText={textInputSetter}
                       />


                  </View>

           <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setHidePass(!hidePass)}
                style={{ height: "100%", width: "20%", justifyContent: "center", alignItems: "center" }}>

               <Ionicons
            name={hidePass ? 'eye-off' : 'eye'}
            color={textInputIconColorEye}
            size={22}
                    />

                 </TouchableOpacity>
                  </View>
   
                    
 : null}




        </React.Fragment>












    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default AbstractTextInput