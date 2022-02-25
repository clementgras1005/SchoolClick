import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Header = () => {
  const navigation = useNavigation();
  const disconnect = () => {
    console.log("dans disconnect");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.header}>
      <Icon
        style={styles.icon}
        name="logout"
        color="white"
        size={30}
        onPress={disconnect}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: "0% 10%",
  },
});
export default Header;
