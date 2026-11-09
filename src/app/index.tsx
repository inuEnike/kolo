import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      await AsyncStorage.setItem("hasCompletedOnboarding", "true");

      const value = await AsyncStorage.getItem("hasCompletedOnboarding");

      setHasCompletedOnboarding(value === "true");
    };

    checkOnboarding();
  }, []);

  if (hasCompletedOnboarding === null) {
    return null;
  }

  if (!hasCompletedOnboarding) {
    return <Redirect href="/screens/Onboarding" />;
  }

  return <Redirect href="/screens/auth/Login" />;
}
