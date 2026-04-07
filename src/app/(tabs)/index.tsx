import { Link } from "expo-router";
import "../../../global.css";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold">Home</Text>
      <Link
        href={"/onboarding"}
        className="mt-4 font-sans-semibold rounded bg-primary text-white p-4
      "
      >
        onboarding
      </Link>
      <Link
        href={"/sign-up"}
        className="mt-4 font-sans-semibold rounded bg-primary text-white p-4
      "
      >
        Sign Up
      </Link>
      <Link
        href={"/sign-in"}
        className="mt-4 font-sans-semibold rounded bg-primary text-white p-4
      "
      >
        Sign In
      </Link>
    </SafeAreaView>
  );
}
