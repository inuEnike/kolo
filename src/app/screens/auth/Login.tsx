import { Colors } from "@/components/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
      >
        {/* Support */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.supportButton}>
            <FontAwesome6
              name="headphones-simple"
              size={18}
              color={Colors.primaryBlue}
            />
          </TouchableOpacity>
        </View>

        {/* Brand */}
        <View style={styles.imageWrapper}>
          <Image
            source={require("@/assets/images/koloMain.png")}
            style={styles.image}
            contentFit="contain"
          />
          <Text style={styles.tagline}>The Smarter Way to Bank</Text>
        </View>

        {/* Welcome */}
        <View style={styles.welcome}>
          <Text style={styles.title}>Login your account</Text>
          <Text style={styles.subtitle}>
            Welcome back to Kọ́lọ́. Enter your details below.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder="johndoe@gmail.com"
              placeholderTextColor={Colors.mutedText}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={Colors.mutedText}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Log in</Text>
          <FontAwesome6 name="arrow-right" size={16} color={Colors.white} />
        </TouchableOpacity>

        {/* Login link */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.loginText}
              onPress={() => router.push("/screens/auth/Signup")}
            >
              {" "}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.terms}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  header: {
    alignItems: "flex-end",
    marginTop: 8,
  },

  supportButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.lightBlueBg,
    alignItems: "center",
    justifyContent: "center",
  },

  imageWrapper: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 30,
  },

  image: {
    width: 130,
    height: 65,
  },

  tagline: {
    fontSize: 14,
    color: Colors.mutedText,
    marginTop: 8,
  },

  welcome: {
    marginBottom: 24,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.darkText,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: Colors.mutedText,
    lineHeight: 21,
  },

  form: {
    gap: 18,
  },

  inputGroup: {
    gap: 9,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.darkText,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: Colors.borderGray,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    color: Colors.darkText,
  },

  button: {
    height: 54,
    backgroundColor: Colors.buttonBlue,
    borderRadius: 10,
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },

  footerText: {
    fontSize: 14,
    color: Colors.mutedText,
  },

  loginText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.buttonBlue,
  },

  terms: {
    fontSize: 11,
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 17,
    marginTop: 24,
  },
});
