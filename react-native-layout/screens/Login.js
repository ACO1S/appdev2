import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Login({ goToSignup }) {
  return (
    <LinearGradient
      colors={["#667eea", "#764ba2"]}
      style={styles.container}
    >
      <View style={styles.card}>
        {/* Login Image */}
        <Image
          source={require("../assets/login.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#667eea" />
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#667eea" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* LOGIN Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>

        {/* Sign up link */}
        <Text style={styles.switchText}>
          Don’t have an account?{" "}
          <Text style={styles.linkText} onPress={goToSignup}>
            Sign up
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 25,
    padding: 25,
    backdropFilter: "blur(10px)",
  },

  image: {
    width: "100%",
    height: 160,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#eee",
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#ff7a18",
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 6,
  },

  switchText: {
    textAlign: "center",
    color: "#fff",
    marginTop: 18,
    fontSize: 14,
  },

  linkText: {
    color: "#ffd700",
    fontWeight: "bold",
  },
});
