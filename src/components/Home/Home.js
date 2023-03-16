import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 justify-start items-center">
          <View className="w-full relative items-center">
            <View className="group relative w-4/5 h-auto border-2 border-solid border-sky-700 items-center py-1 bg-sky-700  active:bg-sky-900 active:transition-colors active:duration-1000">
              <Text className="text-base text-white">HomePage</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
