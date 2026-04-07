import { Link } from "expo-router";
import "../../../global.css";
import { Text, View } from "react-native";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href={"/onboarding"}
        className="mt-4 rounded bg-primary text-white p-4
      "
      >
        onboarding
      </Link>
      <Link
        href={"/sign-up"}
        className="mt-4 rounded bg-primary text-white p-4
      "
      >
        Sign Up
      </Link>
      <Link
        href={"/sign-in"}
        className="mt-4 rounded bg-primary text-white p-4
      "
      >
        Sign In
      </Link>

      <Link href={"/subscriptions/spotify"}>Spotify subscription</Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
      >
        Claude Max subscription
      </Link>
    </SafeAreaView>
  );
}
