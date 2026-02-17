import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

export default function App() {
  const [screen, setScreen] = useState("login");

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {screen === "login" ? (
        <Login goToSignup={() => setScreen("signup")} />
      ) : (
        <Signup goToLogin={() => setScreen("login")} />
      )}
    </View>
  );
}