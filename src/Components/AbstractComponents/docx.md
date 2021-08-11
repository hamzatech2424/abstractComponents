1. Normal Button

Props:

=> button Style: 
btnStyle  "string"
1. Text_Only
2. Icon_Only
3. Text_and_Icon
btnStyle="Text_Only"


=> button BackgroundColor: 
backgrClr  "string"
backgrClr="orange"

=> button Height :
 btnHeight "number" or "percentage"
 btnHeight={"10%"}

=> button Width :
 btnWidth "number" or "percentage"
 btnWidth={"90%"}

=> button BorderRadius :
 btnBorderRadius "number"
 btnBorderRadius={0}

=> button text :
 btnText "string"
 btnText="name"

=> button textSize :
 btnTextSize "number" 
 btnTextSize={18}

=> button textColor :
 btnTextColor "number" 
 btnTextColor="blue"


=> Button borderWidth:
btnborderWidth "number"
btnborderWidth={1}

=> Button borderColor:
btnborderColor "string"
btnborderColor="red"

=> Button Opacity:
btnOpacity 0 to 1  
btnOpacity={0.8}


=> Icon Color:
iconColor "string"
iconColor="red"

=> Icon Name:
iconName "string"
iconName="name of Icon with respect to library"

=> Icon Size:
iconSize "number"
iconSize={10}

=> Icons Supported Libraries
Entypo
FontAwesome
MaterialCommunityIcons
MaterialIcons
Ionicons
iconLibraryName "string"
iconLibraryName="Entypo"

functionality:
BtnPress "call-back funcition"
BtnPress={()=>console.log("hamza")}


example: Normal Btn Compo

  <NormalButton
                btnStyle="Icon_Only"
                btnText="Facebook"
                backgrClr="orange"
                btnborderColor="blue"
                btnTextColor="blue"
                iconColor={"red"}
                btnTextSize={24}
                btnBorderRadius={10}
                btnHeight={40}
                btnWidth={"60%"}
                btnborderWidth={0}
                btnOpacity={0.8}
                iconSize={25}
                iconLibraryName={"Ionicons"}
                iconName={"call"}
                BtnPress={() => console.log("hamza")}
            />





1. TextInput:

Styling:

=> TextInput Style: 
txtInpuStyle  "string"
1. Text_Only
2. Text_and_Icon
txtInpuStyle="Text_Only"


=> textInput BackgroundColor: 
txtInBackgroundColor  "string"

=> txtInput Height :
txtInHeight "number" or "percentage"

=> txtInput Width :
 txtInWidth "number" or "percentage"

=> textInput BorderRadius :
 txtInBorderRadius "number"

=> textInput TextColor :
 txtInTextColor "string"

=> textInput PaddingLeft :
 txtInpaddingLeft "number"

=> textInput PlaceHolderText :
 txtInplacholdertext "string"

=> textInput PlaceHolderTextColor :
 txtInPlaceHolderTextcolor "string"\

=> Icon Color:
iconColor "string"
iconColor="red"

=> Icon Name:
iconName "string"
iconName="name of Icon with respect to library"

=> Icon Size:
iconSize "number"
iconSize={10}

=> Icons Supported Libraries
Entypo
FontAwesome
MaterialCommunityIcons
MaterialIcons
Ionicons
iconLibraryName "string"
iconLibraryName="Entypo"


 functionality:
 1. State for Value
 prop: statevalue "state name to be use for textinput value"
   statevalue={input}

 2. SetState Function
 prop: setStateFunc ""setStateFunc={(txt)=>stateSetFunctionHere(txt)}
 setStateFunc={(txt)=>setInput(txt)}

example :

    <TextInputCompo
                txtInpuStyle="Text_and_Icon"
                statevalue={input}
                setStateFunc={(txt) => setInput(txt)}
                txtInHeight={"10%"}
                txtInWidth={"100%"}
                txtInBackgroundColor={"purple"}
                txtInBorderRadius={0}
                txtInTextColor={"orange"}
                txtInplacholdertext={"username"}
                txtInPlaceHolderTextcolor={"white"}
                iconSize={25}
                iconLibraryName={"Ionicons"}
                iconName={"call"}
                iconColor={"black"}

            />



1. Password TextInput:

Styling:

=> PasswordTextInput Style: 
psdtxtInpuStyle  "string"
1. Text_Only
2. Text_and_Icon
psdtxtInpuStyle="Text_Only"


=> PasswordtextInput BackgroundColor: 
psdtxtInBackgroundColor  "string"
psdtxtInBackgroundColor={"red"}

=> PasswordtextInput Height :
psdtxtInHeight "number" or "percentage"
psdtxtInHeight={50}

=> PasswordtextInput Width :
 psdtxtInWidth "number" or "percentage"
 psdtxtInWidth={"80%"}

=> PasswordtextInput BorderRadius :
 psdtxtInBorderRadius "number"
 psdtxtInBorderRadius={0}

=> textInputTextColor :
 psdtxtInTextColor "string"
 psdtxtInTextColor={"black"}

=> PasswordtextInput PlaceHolderTextColor :
 psdtxtInPlaceHolderTextcolor "string"
 psdtxtInPlaceHolderTextcolor={"black"}

=> PasswordtextInput IconColor :
 psdtxtInIconColor "string"
 psdtxtInIconColor={"yellow"}

=> Icon Color:
iconColor "string"
iconColor="red"

=> Icon Name:
iconName "string"
iconName="name of Icon with respect to library"

=> Icon Size:
iconSize "number"
iconSize={10}

=> Icons Supported Libraries
Entypo
FontAwesome
MaterialCommunityIcons
MaterialIcons
Ionicons
iconLibraryName "string"
iconLibraryName="Entypo"


 functionality:
 1. State for Value
 prop: statevalue "state name to be use for textinput value"

 2. SetState Function
 prop: setStateFunc ""setStateFunc={(txt)=>stateSetFunctionHere(txt)}


example :

     <PasswordTextInputCompo
                psdtxtInpuStyle={"Text_and_Icon"}
                psdtxtInBackgroundColor={"red"}
                psdtxtInHeight={50}
                psdtxtInWidth={"80%"}
                psdtxtInBorderRadius={0}
                psdtxtInTextColor={"black"}
                psdtxtInPlaceHolderTextcolor={"black"}
                psdtxtInIconColor={"yellow"}
                statevalue={input}
                setStateFunc={(txt) => setInput(txt)}
                iconSize={25}
                iconLibraryName={"Ionicons"}
                iconName={"call"}
                iconColor={"black"}
            />



4. Button with Image


=> button BackgroundColor: 
backgrClr  "string"
backgrClr="orange"

=> button Height :
 btnHeight "number" or "percentage"
 btnHeight={"10%"}

=> button Width :
 btnWidth "number" or "percentage"
 btnWidth={"90%"}

=> button BorderRadius :
 btnBorderRadius "number"
 btnBorderRadius={0}

=> Button borderWidth:
btnborderWidth "number"
btnborderWidth={1}

=> Button borderColor:
btnborderColor "string"
btnborderColor="red"

=> Button Opacity:
btnOpacity 0 to 1  
btnOpacity={0.8}

=> Image Url:
imageUrl={image1} 

=> Image Height :
imgHeight={"70%"}

=> Image Width :
imgWidth={"70%"}


functionality:
BtnPress "call-back funcition"
BtnPress={()=>console.log("hamza")}




example:

<ButtonWithImageCompo
               backgrClr="orange"
               btnBorderRadius={10}
               btnHeight={150}
               btnWidth={"60%"}
               btnborderWidth={0}
               btnborderColor="blue"
               btnOpacity={0.8}
               imageUrl={image1}
               imgWidth={"70%"}
               imgHeight={"70%"}
               BtnPress={() => console.log("hamza")}
            />





instagram Buttom


=> button BackgroundColor: 
backgrClr  "string"
backgrClr="orange"

=> button Height :
 btnHeight "number" or "percentage"
 btnHeight={"10%"}

=> button Width :
 btnWidth "number" or "percentage"
 btnWidth={"90%"}

=> button BorderRadius :
 btnBorderRadius "number"
 btnBorderRadius={0}

=> button text :
 btnText "string"
 btnText="name"

=> button textSize :
 btnTextSize "number" 
 btnTextSize={18}

=> button textColor :
 btnTextColor "number" 
 btnTextColor="blue"


=> Button borderWidth:
btnborderWidth "number"
btnborderWidth={1}

=> Button borderColor:
btnborderColor "string"
btnborderColor="red"

=> Button Opacity:
btnOpacity 0 to 1  
btnOpacity={0.8}


=> Icon Color:
iconColor "string"
iconColor="red"

=> Icon Name:
iconName "string"
iconName="name of Icon with respect to library"

=> Icon Size:
iconSize "number"
iconSize={10}

=> Icons Supported Libraries
Entypo
FontAwesome
MaterialCommunityIcons
MaterialIcons
Ionicons
iconLibraryName "string"
iconLibraryName="Entypo"

functionality:
BtnPress "call-back funcition"
BtnPress={()=>console.log("hamza")}

<InstagramButtonCompo
 backgrClr="orange"
 btnBorderRadius={10}
 btnHeight={150}
 btnWidth={"30%"}
 btnborderWidth={0}
 btnborderColor="blue"
 btnOpacity={0.8}
 iconSize={50}
 iconLibraryName={"Ionicons"}
 iconName={"call"}
 iconColor={"white"}
 btnTextColor="white"
 btnTextSize={16}
 btnText="Facebook"
 BtnPress={() => console.log("hamza")}
/>