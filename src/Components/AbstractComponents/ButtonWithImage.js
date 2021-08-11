import React from "react"
import { View,Text,StyleSheet, TouchableOpacity,Image} from "react-native"



const ButtonWithImageCompo = ({btnWidth,btnHeight,imgWidth,imgHeight,backgrClr,btnBorderRadius,btnborderWidth,btnborderColor,BtnPress,btnOpacity,imageUrl}) => {
    
    // console.log(imageUrl)
    
    return(
        <TouchableOpacity
        onPress={BtnPress}
        activeOpacity={btnOpacity}
        style={{ width: btnWidth, height: btnHeight, backgroundColor: backgrClr, justifyContent: "center", alignItems: "center", borderRadius: btnBorderRadius, borderWidth: btnborderWidth, borderColor: btnborderColor }}>
            <Image source={{uri:`${imageUrl}`}} style={{width:imgWidth,height:imgHeight,backgroundColor:"red"}} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


export default ButtonWithImageCompo