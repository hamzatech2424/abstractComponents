import React,{useState} from "react"
import {View,Text,TextInput,StyleSheet} from "react-native"
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';




const TextInputCompo = ({statevalue,setStateFunc,iconSize,iconLibraryName,iconName,iconColor,txtInpuStyle,txtInHeight ,txtInBackgroundColor,txtInWidth,txtInBorderRadius,txtInTextColor,txtInplacholdertext,txtInPlaceHolderTextcolor}) => {

    

    return(

   
<React.Fragment>
    
      {txtInpuStyle == "Text_Only" ?
    
    <View style={{backgroundColor:txtInBackgroundColor,width:txtInWidth,height:txtInHeight,borderRadius:txtInBorderRadius}}>
     <TextInput
      placeholder={txtInplacholdertext}
      placeholderTextColor={txtInPlaceHolderTextcolor}
       style={{
        height:"100%",
        width:"100%",
        paddingLeft:10,
        color:txtInTextColor,
       }}
       value={statevalue}
       onChangeText={setStateFunc}
      />
      </View>
    
:   txtInpuStyle == "Text_and_Icon" ?
       


  <View style={{backgroundColor:txtInBackgroundColor,width:txtInWidth,height:txtInHeight,flexDirection:"row",borderRadius:txtInBorderRadius}}>
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

      <View style={{width:"85%",height:"100%",borderTopRightRadius:txtInBorderRadius,borderBottomRightRadius:txtInBorderRadius}}>

      <TextInput
      placeholder={txtInplacholdertext}
      placeholderTextColor={txtInPlaceHolderTextcolor}
       style={{
           height:"100%",
           width:"100%",
           paddingLeft:10,
           color:txtInTextColor,
       }}
       value={statevalue}
       onChangeText={setStateFunc}
      />

      </View>

  </View>:null}




  </React.Fragment>









   
       

    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


export default TextInputCompo