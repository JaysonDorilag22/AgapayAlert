import { Button } from "@/components/ui/button";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MAP_TILE_URL, MAP_ATTRIBUTION } from "@/lib/maps";
import geojsonData from "@/lib/export";
import { useState, useEffect } from "react";

// Parse the GeoJSON data to extract police stations
const policeStations = geojsonData.features
  .filter(feature => feature.properties.amenity === "police")
  .map(feature => ({
    position: feature.geometry.coordinates.reverse(), // Reverse to [lat, lng]
    name: feature.properties.name,
  }));

// Create a custom icon using logo3
const customIcon = new L.Icon({
  iconUrl: logo3,
  iconSize: [24, 24], // Adjust the size as needed
  iconAnchor: [12, 24], // Adjust the anchor as needed
  popupAnchor: [0, -24], // Adjust the popup anchor as needed
});

// Create a custom icon for the user's location
const userLocationIcon = new L.Icon({
  iconUrl: "https://w7.pngwing.com/pngs/158/65/png-transparent-location-application-icon-computer-software-business-information-organization-location-logo-miscellaneous-blue-company.png", // Replace with the URL of your location icon
  iconSize: [24, 24], // Adjust the size as needed
  iconAnchor: [12, 24], // Adjust the anchor as needed
  popupAnchor: [0, -24], // Adjust the popup anchor as needed
});

export default function HeroSection() {
  const { theme } = useTheme();
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.log("User's coordinates:", { latitude, longitude });
          setUserLocation([latitude, longitude]);
        },
        error => {
          console.error("Error getting user location:", error);
        },
        {
          enableHighAccuracy: true, // Use high accuracy mode if available
          timeout: 5000, // Timeout after 5 seconds
          maximumAge: 0 // Do not use a cached position
        }
      );

      // Cleanup function to clear the watch when the component unmounts
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden lg:py-20 flex justify-center items-center">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <motion.img
              src={theme === "dark" ? logo4 : logo3}
              alt="Logo"
              className="w-32 h-32 text-center mx-auto mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Help Us Find Missing Persons, One Alert at a Time.
            </motion.p>
            <motion.h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              AgapayAlert
            </motion.h1>
            <motion.p
              className="mt-3 text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              A System for Rapid Response to Abduction, Kidnapping, Missing
              Persons, and Hit-and-Run Incidents.
            </motion.p>
          </div>
          <motion.div
            className="mt-8 gap-3 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <Button size={"lg"}>Report Now</Button>
            <Button size={"lg"} variant={"outline"}>
              Get Alerts
            </Button>
          </motion.div>
          <motion.div
            className="mt-10 relative max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <MapContainer
              center={userLocation || [14.5176, 121.0509]}
              zoom={13}
              className="h-96 rounded-xl"
            >
              <TileLayer
                url={MAP_TILE_URL}
                attribution={MAP_ATTRIBUTION}
              />
              {userLocation && (
                <Marker position={userLocation} icon={userLocationIcon}>
                  <Popup>Your Location</Popup>
                </Marker>
              )}
              {policeStations.map((station, index) => (
                <Marker key={index} position={station.position} icon={customIcon}>
                  <Popup>{station.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </motion.div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}