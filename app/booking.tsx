import { Button, StyleSheet, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Booking() {
  const { spot: spotParam } = useLocalSearchParams();
  const spot = JSON.parse(spotParam as string);

  const handleBooking = () => {
    Alert.alert(
      "Booking Confirmed",
      "Your parking spot has been reserved. Our admin team will contact you for payment details.",
      [{ text: "OK", onPress: () => router.replace("/(tabs)") }]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.details}>
        <ThemedText style={styles.title}>Booking Details</ThemedText>
        <ThemedText style={styles.text}>Location: {spot.location}</ThemedText>
        <ThemedText style={styles.text}>Vehicle Type: {spot.type}</ThemedText>
        <ThemedText style={styles.text}>Price: {spot.price}</ThemedText>
      </ThemedView>
      <Button title="Confirm Booking" onPress={handleBooking} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  details: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
