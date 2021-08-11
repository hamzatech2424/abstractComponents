import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { InstagramButtonCompo, NormalButton, TextInputCompo, PasswordTextInputCompo, ButtonWithImageCompo } from "../Components/AbstractComponents"


const Main = () => {

    const [input, setInput] = useState("")
    const image1 = "https://m.media-amazon.com/images/M/MV5BZTg0NjE0NTQtZTBlYS00OGI4LWE1NTgtYTY4ZmRlZThkYjEzXkEyXkFqcGdeQXVyNjUxODQxNzQ@._V1_FMjpg_UX1000_.jpg"

    return (
        <View style={styles.container}>


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




        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})


export default Main