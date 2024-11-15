import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#112342" }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerShown: false,
          title: "Categorias",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="archive" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre mim",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
/*

            
            */
