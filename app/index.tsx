import { useState } from "react";
import { Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedTextInput } from "@/components/ThemedTextInput";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const requestOtp = async () => {
    if (phone.length === 10) {
      setShowOtp(true);
      Alert.alert("OTP sent", "Use 1234 as test OTP");
    } else {
      Alert.alert("Error", "Please enter a valid phone number");
    }
  };

  const verifyOtp = async () => {
    if (otp === "1234") {
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.replace("/(tabs)");
    } else {
      Alert.alert("Error", "Invalid OTP");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedTextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      {!showOtp ? (
        <Button title="Get OTP" onPress={requestOtp} />
      ) : (
        <>
          <ThemedTextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <Button title="Verify OTP" onPress={verifyOtp} />
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
