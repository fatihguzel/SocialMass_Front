import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import React from "react";

const LoginPage = () => {
  return (
    <View className="flex-1 justify-evenly items-center">
      {/* Logo */}
      <View>
        <Text className="top-12 text-4xl tracking-widest font-light text-sky-700">
          SOCIALMASS
        </Text>
      </View>
      {/* Inputs */}
      <View className="flex flex-col gap-y-8 w-full items-center">
        <View className="w-[60%] flex flex-row justify-center items-center gap-x-2">
          <Icon name="mail" type="ionicon" color="#517fa4" size={20} />
          <TextInput
            className="w-full placeholder:italic placeholder:tracking-widest border  border-gray-400 no-underline px-2"
            placeholder="email"
          />
        </View>
        <View className="relative w-[60%] flex flex-row justify-center items-center gap-x-2">
          <Icon name="eye" type="ionicon" color="#517fa4" size={20} />
          <TextInput
            className="w-full placeholder:italic placeholder:tracking-widest border  border-gray-400 no-underline px-2"
            placeholder="password"
          />
        </View>

        <View className="w-[67%] relative ">
          <Pressable className="group absolute w-[50%] right-0 border-2 border-solid border-sky-700 items-center py-1 bg-sky-700  active:bg-sky-900 active:transition-colors active:duration-1000">
            <Text className="text-base text-white ">LOGIN</Text>
          </Pressable>
        </View>
        <View className="top-8 flex w-[60%]">
          <Text className="self-end -right-3 text-sky-700">
            Forgot Password?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
