import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { getAllCategories } from "../../services/category";
import { CategoryItem } from "../../components/category-item";

export default function Screen() {
  const categories = getAllCategories();

  return (
    <View>
      <Image
        source={require("../../assets/guia+logo.png")}
        style={{
          width: 100,
          height: 40,
        }}
      />
    </View>
    
  );
}
