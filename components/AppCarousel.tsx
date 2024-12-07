import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-reanimated-carousel";

export default function AppCarousel() {
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const width = Dimensions.get("window").width;

  const list = [
    {
      id: 1,
      title: "First Item",
      image: "https://encurtador.com.br/zxuV5",
    },

  ];
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={width}
        height={width / 2}
        data={list}
        autoPlay={true}
        pagingEnabled={pagingEnabled}
        scrollAnimationDuration={2000}
        renderItem={({ item }) => (
       
          <View style={styles.CarouselItem}>
            <Image style={styles.img} src={item.image} />
          </View>
        
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CarouselItem: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
  },
});
