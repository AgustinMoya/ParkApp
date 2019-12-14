import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import MapView from "react-native-maps";

const parkingsSpots = [
  {
    id: 1,
    title: "Parking 1",
    price: 5,
    rating: 4.2,
    spots: 20,
    free: 10
  },
  {
    id: 2,
    title: "Parking 2",
    price: 7,
    rating: 3.8,
    spots: 25,
    free: 20
  },
  {
    id: 3,
    title: "Parking 3",
    price: 10,
    rating: 4.9,
    spots: 50,
    free: 25
  }
];
const { height, width } = Dimensions.get("screen");

export default class Map extends React.Component {
  renderParking(item) {
    return (
      <View key={`parking-${item.id}`} style={styles.parking}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        ></MapView>
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          style={styles.parkings}
        >
          {parkingsSpots.map(parking => this.renderParking(parking))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width,
    height,
    flex: 3
  },
  header: {
    flex: 0.5,
    justifyContent: "center"
  },
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 24
  },
  parking: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 24,
    marginHorizontal: 24,
    width: width - 24 * 2
  }
});
