import React from "react";
import { StyleSheet, TextInput } from "react-native";
import COLORS from "../consts/color";

function InputText({placeholder,secureTextEntry,onChangeText}) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </>
  );
}
const styles = StyleSheet.create({
    input: {
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,
      },
})
export default InputText;
