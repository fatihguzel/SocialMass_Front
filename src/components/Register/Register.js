import React from "react";
import { View, Text, TextInput, Image, Pressable, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const RegisterPage = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Image
        resizeMode="cover"
        className="absolute w-full opacity-5 h-full"
        source={require("../../assets/social.png")}
      />
      {/* Logo */}
      <View>
        <Text className="bottom-16 text-4xl tracking-widest font-light text-sky-700">
          SOCIALMASS
        </Text>
      </View>
      {/* Inputs */}
      <View className="relative z-10 flex flex-col gap-y-8 w-full items-center">
        <View className="w-[60%] flex flex-row justify-center items-center gap-x-2">
          <Icon name="arrow-forward" type="ionicon" color="#517fa4" size={20} />
          <TextInput
            className="w-full placeholder:italic placeholder:tracking-widest border  border-gray-400 no-underline px-2"
            placeholder="username"
          />
        </View>
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
          <Pressable
            className="group absolute w-[50%] right-0 border-2 border-solid border-sky-700 items-center py-1 bg-sky-700  active:bg-sky-900 active:transition-colors active:duration-1000"
            onPress={() => {
              Alert.alert(
                "SOCIALMASS",
                "Kayıt Başarılı Giriş Sayfasına Yönlendiriliyorsunuz!"
              );
              setTimeout(() => {
                navigation.navigate("LoginPage");
              }, 500);
            }}
          >
            <Text className="text-base text-white ">REGISTER</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
