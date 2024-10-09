import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-reanimated-carousel";

export default function AppCarousel() {
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const width = Dimensions.get("window").width;

  const list = [
    {
      id: 1,
      title: "First Item",
      image: require("../assets/images/1.jpg"),
    },
    {
      id: 2,
      title: "Second Item",
      image: require("../assets/images/2.jpg"),
    },
    {
      id: 3,
      title: "Third Item",
      image: require("../assets/images/3.jpg"),
    },
    {
      id: 4,
      title: "Fourth Item",
      image: require("../assets/images/4.jpg"),
    },
    {
      id: 5,
      title: "Fifth Item",
      image: require("../assets/images/5.jpg"),
    },
    {
      id: 6,
      title: "Sixth Item",
      image: require("../assets/images/6.jpg"),
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
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.CarouselItem}>
            <Image style={styles.img} source={item.image} />
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
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
