import { router } from "expo-router";
import React = require("react");
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Category } from "../types/category";
import { View } from "react-native";

type Props = {
  data: Category;
};

export const CategoryItem = ({ data }: Props) => {
  const handleClick = () => {
    router.push(`/categories/${data.id}`);
  };

  return (
    <Pressable style={styles.container} onPress={handleClick}>
      <Image
        style={styles.img}
        source={{ uri: data.cover }}
        resizeMode="cover"
      />
      <View style={styles.bg}></View>
      <View style={styles.box}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  bg: {
    height: 150,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 10,
    marginTop: -150,
  },
  box: {
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
});
