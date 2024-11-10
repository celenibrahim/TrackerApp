import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="go to sigin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="go to mainflow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
