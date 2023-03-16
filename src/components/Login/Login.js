import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import React from "react";
import { Alert } from "react-native";

const LoginPage = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        resizeMode="cover"
        className="absolute w-full opacity-5 h-full"
        source={require("../../assets/social.png")}
      />
      {/* Logo */}
      <View>
        <Text className="bottom-12 text-4xl tracking-widest font-light text-sky-700">
          SOCIALMASS
        </Text>
      </View>
      {/* Inputs */}
      <View className="w-full flex flex-col gap-y-8 items-center">
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
        <View className="relative w-[60%]">
          <Text className="absolute -right-3">Forgot Password?</Text>
        </View>
        <View className="flex">
          <View className="w-[60%] flex flex-row justify-end items-center gap-x-2">
            <Pressable
              className="w-full border-2 left-4 border-solid border-sky-700 items-center py-1 bg-sky-700  active:bg-sky-900 active:transition-colors active:duration-1000"
              onPress={() => {
                Alert.alert(
                  "SOCIALMASS",
                  "Giriş Başarılı Anasayfaya Yönlendiriliyorsunuz"
                );
                setTimeout(() => {
                  navigation.navigate("HomePage");
                }, 750);
              }}
            >
              <Text className="text-base text-white">Login</Text>
            </Pressable>
          </View>
          <View className="w-[60%] top-8 flex flex-row justify-end items-center gap-x-2">
            <Pressable
              className="w-full border left-4 border-solid border-sky-700 items-center py-1 bg-transparent"
              onPress={() => {
                setTimeout(() => {
                  navigation.navigate("RegisterPage");
                }, 750);
              }}
            >
              <Text className="text-base text-sky-700">Create Account</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
