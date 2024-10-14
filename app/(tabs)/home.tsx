import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppCarousel from "../../components/AppCarousel";
import Parallax from "../../components/Parallax";
import { MagnifyingGlassIcon, Bars3Icon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

let width = Dimensions.get("window").width;

export default function Screen() {
  const handleStart = () => {
    router.replace("/categories");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", height: "100%" }}>
      <ScrollView
        style={{ backgroundColor: "#FFF" }}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Bars3Icon
              onPress={handleStart}
              size={hp(5)}
              color={"gray"}
              style={{ paddingHorizontal: 60 }}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/icon2.png")}
            style={{
              width: hp(25),
              height: hp(10),
              paddingRight: 300,
            }}
          />
        </View>

        <View style={styles.container}>
          <Parallax />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
