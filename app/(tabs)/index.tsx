import { useState } from "react";
import { Button, StyleSheet, FlatList } from "react-native";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const mockParkingSpots = [
  {
    id: "1",
    type: "Car",
    location: "Downtown",
    price: "₹2000/month",
    available: true,
  },
  {
    id: "2",
    type: "Bike",
    location: "Central",
    price: "₹800/month",
    available: true,
  },
  {
    id: "3",
    type: "Car",
    location: "Suburb",
    price: "₹1500/month",
    available: true,
  },
];

export default function Search() {
  const [vehicleType, setVehicleType] = useState("Car");

  const renderParkingSpot = ({ item }: any) => {
    if (item.type !== vehicleType) return null;

    return (
      <ThemedView style={styles.spotCard}>
        <ThemedText style={styles.spotText}>
          Location: {item.location}
        </ThemedText>
        <ThemedText style={styles.spotText}>Price: {item.price}</ThemedText>
        <Button
          title="Book Now"
          onPress={() =>
            router.push({
              pathname: "/booking",
              params: { spot: JSON.stringify(item) },
            })
          }
        />
      </ThemedView>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.filterButtons}>
        <Button
          title="Car Parking"
          onPress={() => setVehicleType("Car")}
          color={vehicleType === "Car" ? "#007AFF" : "#999"}
        />
        <Button
          title="Bike Parking"
          onPress={() => setVehicleType("Bike")}
          color={vehicleType === "Bike" ? "#007AFF" : "#999"}
        />
      </ThemedView>
      <FlatList
        data={mockParkingSpots}
        renderItem={renderParkingSpot}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  spotCard: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  spotText: {
    marginBottom: 5,
  },
});
