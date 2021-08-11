1. Abstract Button

Props:

=> button Style: 
btntype  "string"
1. Text_Only
2. Icon_Only
3. Text_and_Icon_Horizontal
4. Text_and_Icon_‎Verticle
5. Image_Only
6. Processing
btntype="Text_Only"


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

=> Image Url:
imageUrl={image1} 

=> Image Height :
imgContainerHeight={"70%"}

=> Image Width :
imgContainerWidth={"70%"}


functionality:
BtnPress "anonymus funcition"
BtnPress={()=>console.log("hamza")}


import Ionicons from 'react-native-vector-icons/Ionicons';


 const IconCompo = ({name,size,color}) => {
        return (
            <Ionicons name={name} size={size} color={color}  />
        )
    }


example: 

  <AbstractButton
                btnStyle="Icon_Only"
                btnText="Facebook"
                backgrClr="orange"
                btnborderColor="blue"
                btnTextColor="blue"
                iconColor={"red"}
                btnTextSize={24}
                btnHeight={40}
                btnWidth={"60%"}
                btnborderWidth={0}
                btnOpacity={0.8}
                btnIcon={()=><IconCompo name={"call"} size={25} color={"white"} />}
                BtnPress={() => console.log("hamza")}
            />





1. TextInput:

Styling:

=> TextInput Style: 
txtInpuStyle  "string"
1. Text_Only
2. Text_and_Icon
3. Password_TextInput
4. Password_TextInput_and_Icon
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

=> PasswordtextInput IconColor :
 psdtxtInIconColor "string"
 psdtxtInIconColor={"yellow"}


 functionality:
 1. State for Value
 prop: statevalue "state name to be use for textinput value"
   statevalue={input}

 2. SetState Function
 prop: setStateFunc ""setStateFunc={(txt)=>stateSetFunctionHere(txt)}
 setStateFunc={(txt)=>setInput(txt)}

 import Ionicons from 'react-native-vector-icons/Ionicons';


 const IconCompo = ({name,size,color}) => {
        return (
            <Ionicons name={name} size={size} color={color}  />
        )
    }



example :

    <TextInputCompo
                txtInpuType="Text_and_Icon"
                statevalue={input}
                setStateFunc={(txt) => setInput(txt)}
                txtInHeight={"10%"}
                txtInWidth={"100%"}
                txtInBackgroundColor={"purple"}
                txtInBorderRadius={0}
                txtInTextColor={"orange"}
                txtInplacholdertext={"username"}
                txtInPlaceHolderTextcolor={"white"}
              

            />





