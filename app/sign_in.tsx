import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const sign_in = () => {


  const { refetch, loading, isLogged } = useGlobalContext();

  if(!loading && isLogged) return <Redirect href={"/"}/>


  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-center text-base uppercase font-rubik text-black-200">
            Welcome To Re-State
          </Text>
        </View>

        <Text className="text-center text-3xl font-rubik-bold text-black-300 mt-2">
          Let's Get You Closer To {"\n"}{" "}
          <Text className="text-primary-300">Your Ideal Home</Text>{" "}
        </Text>

        <View className="flex justify-center items-center mt-5">
          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-[80%] py-4 mt-5"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_in;

// .setProject('67a38cda0020f865b952')
// .setPlatform('com.evo.state');
