import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <View className="w-[67%] relative ">
        <Pressable
          className="group absolute w-[50%] right-0 border-2 border-solid border-sky-700 items-center py-1 bg-sky-700  active:bg-sky-900 active:transition-colors active:duration-1000"
          onPress={() => {
            setTimeout(() => {
              navigation.navigate("ProfilePage");
            }, 750);
          }}
        >
          <Text className="text-base text-white ">HomePage</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
