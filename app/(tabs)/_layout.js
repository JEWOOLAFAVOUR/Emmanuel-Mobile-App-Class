import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";


const FormInput = ({ placeholder, kType }) => {
  return (
    <View style={styles.textCtn}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        keyboardType={kType}
        secureTextEntry={true}
        style={{ fontSize: 14, color: 'black' }}
      />
    </View>
  )
}

const _layout = () => {




  return (
    <View style={styles.page}>
      <Text style={{ fontSize: 30, color: "black", fontWeight: "bold" }}>Input Class</Text>

      <FormInput placeholder={"enter your name"} />
      <FormInput placeholder={"enter your email"} kType={"numeric"} />
      <FormInput />
      <FormInput />
      <FormInput />
      <FormInput />
      <FormInput />
      <FormInput />


    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  textCtn: {
    height: 45,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
