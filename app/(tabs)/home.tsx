import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Parallax from "../../components/Parallax";
import { MagnifyingGlassIcon, Bars3Icon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import AppCarousel from "../../components/AppCarousel";

let width = Dimensions.get("window").width;

export default function Screen() {
  const handleStart = () => {
    router.replace("/categories/list");
  };

  /* const handleStart2 = () => {
    router.replace("/about");
  };*/
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", height: "100%" }}>
      <ScrollView
        style={{ backgroundColor: "#FFF" }}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              paddingTop: 50,
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
            <AppCarousel />
          </View>

          {/* BOTÕES ATALHOS NA HOME */}
          <Link href="/categories2/271" asChild>
            <Pressable style={{ flex: 1, paddingTop: 50,}}>
              <View
                style={{
                  flexDirection:"row",
                  width: 350,
                  height: 60,
                  backgroundColor: "#112342",
                  alignItems: "center",
                  borderRadius: 10,
                  
                }}
              >
                <View style={{paddingLeft:110}}>
                      <Text
                        style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }} 
                      >
                        COMIDAS
                      </Text>
                </View>
                <View style={{flex:1, paddingLeft:30, paddingBottom:30}}>
                      <Image style={{height:115, width:110,}} source={require("../../assets/LANCHE.png")}/>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/categories2/161" asChild>
            <Pressable style={{ flex: 1, paddingTop:50}}>
              <View
                style={{
                  flexDirection:"row",
                  width: 350,
                  height: 60,
                  backgroundColor: "#112342",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  
                }}
              >
                <View style={{paddingLeft:110}}>
                      <Text
                        style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }} 
                      >
                        BEBIDAS
                      </Text>
                </View>
                <View style={{flex:1, paddingLeft:30, paddingBottom:10}}>
                      <Image style={{height:130, width:120,}} source={require("../../assets/Bebidas.png")}/>
                </View>
                
              </View>
            </Pressable>
          </Link>
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
    paddingTop: 100,
  },
});
