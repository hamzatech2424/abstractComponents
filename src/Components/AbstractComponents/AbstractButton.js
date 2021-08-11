import React from "react"
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native"


const AbstractButton = ({ btnText, btntype, btnTextColor, BtnPress,btnBorderRadius, backgrClr, btnIcon, btnTextSize, btnActivityIndicatorColor, btnHeight, btnWidth, btnborderWidth, btnborderColor, btnOpacity, imageUrl, imgWidth, imgHeight, imgContainerHeight, imgContainerWidth }) => {


    const ifBtnNotPressed = () => {
        return null
    }

    const butttonHeight = btnHeight ? btnHeight : "10%"
    const buttonWidth = btnWidth ? btnWidth : "50%"
    const buttonBackgroundColor = backgrClr ? backgrClr : "red"
    const buttonBorderWidth = btnborderWidth ? btnborderWidth : 1
    const buttonBorderColor = btnborderColor ? btnborderColor : buttonBackgroundColor
    const buttonActiveOpacity = btnOpacity ? btnOpacity : 0.8
    const buttonTextColor = btnTextColor ? btnTextColor : "white"
    const buttonTextSize = btnTextSize ? btnTextSize : 14
    const buttonText = btnText ? btnText : "Pass btnText prop"
    const buttonIcon = btnIcon ? btnIcon : false
    const buttonPress = BtnPress ? BtnPress : ifBtnNotPressed()
    const buttonImageUrl = imageUrl ? imageUrl : ""
    const buttonBorderRadius = btnBorderRadius ? btnBorderRadius : 0
    const buttonImageContainerHeight = imgContainerHeight ? imgContainerHeight : "50%"
    const buttonImageContainerWidth = imgContainerWidth ? imgContainerWidth : "50%"
    const buttonImageWidth = imgWidth ? imgWidth : "100%"
    const buttonImageHeight = imgHeight ? imgHeight : "100%"
    const ActivityIndicatorColr = btnActivityIndicatorColor ? btnActivityIndicatorColor : "white"



    return (
        <React.Fragment>

            <TouchableOpacity
                onPress={buttonPress}
                activeOpacity={buttonActiveOpacity}
                style={{ width: buttonWidth, height: butttonHeight, backgroundColor: buttonBackgroundColor, justifyContent: "center", alignItems: "center", borderWidth: buttonBorderWidth, borderColor: buttonBorderColor,borderRadius:buttonBorderRadius }}>

    {btntype == "Text_Only" ?

                <View>
                   <Text style={{ color: buttonTextColor, fontSize: buttonTextSize }}>{buttonText}</Text>
                </View>


    : btntype == "Icon_Only" ?   //2nd btnstyle

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    {buttonIcon? btnIcon() : <Text>Add Icon</Text>} 
                </View>


    : btntype == "Text_and_Icon_Horizontal" ?   //3rd btnstyle

                <View style={{ width: "60%", height: "100%", flexDirection: "row" }}>

                    <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        {buttonIcon? btnIcon() : <Text>Add Icon</Text>}
                    </View>

                    <View style={{ width: "80%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: buttonTextColor, fontSize: buttonTextSize }}>{buttonText}</Text>
                    </View>

                </View>

    : btntype == "Processing" ?

                <View>
                    <ActivityIndicator size="large" color={ActivityIndicatorColr} />
                </View>

    : btntype == "Image_Only" ?


                <View style={{ backgroundColor: "blue", height: buttonImageContainerHeight, width: buttonImageContainerWidth }}>
                    <Image source={{ uri: `${buttonImageUrl}` }} style={{ width: buttonImageWidth, height: buttonImageHeight }} />
                </View>


    : btntype == "Text_and_Icon_‎Verticle" ?   


                <View style={{  width: "70%", height: "70%", flexDirection: "column" }}>

                   <View style={{ height: "70%", width: "100%",justifyContent:"center",alignItems:"center" }}>
                      {buttonIcon? btnIcon() : <Text>Add Icon</Text>}
                    </View>
                    
                    
                    <View style={{ height: "30%", width: "100%",alignItems:"center",backgroundColor:"orange" }}>
                      <Text style={{ color: buttonTextColor, fontSize: buttonTextSize }}>{buttonText}</Text>
                    </View>
                    
                </View>




    : null}
            </TouchableOpacity>

        </React.Fragment>
    )

}



export default AbstractButton