import { Button, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function ListingInterest() {
  const handleInterest = () => {
    Alert.alert(
      "Interest Registered",
      "Thank you for your interest! Our admin team will contact you soon.",
      [{ text: "OK", onPress: () => router.replace("/(tabs)") }]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>
        Want to list your parking spot and earn money?
      </ThemedText>
      <ThemedText style={styles.subText}>
        Click below and our team will contact you with more details.
      </ThemedText>
      <Button title="Express Interest" onPress={handleInterest} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
});
