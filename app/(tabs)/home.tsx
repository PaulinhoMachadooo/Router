import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import AppCarousel from "../../components/AppCarousel";
import Parallax from "../../components/Parallax";

export default function Screen() {
  return (
    <View>
      <View style={styles.logo}>
        <Image source={require("../../assets/icon2.png")} />
      </View>
      <View style={styles.container}>
        {/* <AppCarousel /> */}
        <Parallax />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    width: 20,
    height: 10,
  },
});
