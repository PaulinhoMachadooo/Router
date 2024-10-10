import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import AppCarousel from "../../components/AppCarousel";
import Parallax from "../../components/Parallax";
import { MagnifyingGlassIcon, Bars3Icon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

let width = Dimensions.get("window").width;

export default function Screen() {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Bars3Icon size={hp(5)} color={"gray"} />
          <Image
            source={require("../../assets/icon2.png")}
            style={{
              width: hp(20),
              height: hp(8),
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
