import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-pblack">My new App</Text>
      <StatusBar style="auto"/>
      <Link href="/home" className="text-blue-500 bg-slate-300 p-4 rounded-lg mt-4">go to profile</Link>
    </View>
  );
};

export default index;
